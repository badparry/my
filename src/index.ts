import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Basic route with test data
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js Starter API',
    endpoints: {
      '/': 'This welcome message',
      '/health': 'Health check endpoint',
      '/test/users': 'Test endpoint - Returns sample users',
      '/test/posts': 'Test endpoint - Returns sample posts'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Test endpoints
app.get('/test/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.json(users);
});

app.get('/test/posts', (req, res) => {
  const posts = [
    { id: 1, title: 'First Post', content: 'Hello World!' },
    { id: 2, title: 'Second Post', content: 'Another post content' }
  ];
  res.json(posts);
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Test the API using curl commands:`);
  console.log(`curl http://localhost:${port}/`);
  console.log(`curl http://localhost:${port}/health`);
  console.log(`curl http://localhost:${port}/test/users`);
  console.log(`curl http://localhost:${port}/test/posts`);
});
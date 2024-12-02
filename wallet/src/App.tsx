import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
        <Container 
          w="402px" 
          h="874px" 
          position="relative"
          bg="white"
          overflow="hidden"
          boxShadow="xl"
          borderRadius="2xl"
          p={0}
        >
          <MainContent />
          <Navigation />
        </Container>
      </Box>
    </Router>
  );
}

export default App;
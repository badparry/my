import React from 'react';
import { Box, Heading, Text, SimpleGrid, Card, CardBody } from '@chakra-ui/react';
import Counter from '../components/Counter';

function Home() {
  return (
    <Box>
      <Heading mb={6}>Welcome to React Starter</Heading>
      <Counter />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={6}>
        <Card>
          <CardBody>
            <Heading size="md" mb={4}>Feature 1</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading size="md" mb={4}>Feature 2</Heading>
            <Text>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading size="md" mb={4}>Feature 3</Heading>
            <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default Home;
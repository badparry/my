import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box>
      <Heading mb={6}>About Us</Heading>
      <Text fontSize="lg">
        This is a modern React application starter template built with TypeScript,
        Vite, and Chakra UI. It provides a solid foundation for building scalable
        web applications.
      </Text>
    </Box>
  );
}

export default About;
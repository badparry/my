import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack } from '@chakra-ui/react';

function Contact() {
  return (
    <Box>
      <Heading mb={6}>Contact Us</Heading>
      <Box maxW="md">
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="blue" width="full">
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Contact;
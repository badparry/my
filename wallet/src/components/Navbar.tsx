import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Box bg="white" px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">React Starter</Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'blue.500' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="gray.600" _hover={{ color: 'blue.500' }}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="gray.600" _hover={{ color: 'blue.500' }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
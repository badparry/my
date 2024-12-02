import React from 'react';
import { Box, Button, Text, HStack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement } from '../store/slices/counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <Text fontSize="xl" mb={4}>Count: {count}</Text>
      <HStack spacing={4}>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </HStack>
    </Box>
  );
}

export default Counter;
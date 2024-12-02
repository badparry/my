import React from 'react';
import { Box, HStack, Avatar, Text } from '@chakra-ui/react';
import { Message } from '../../types/chat';

interface MessageBubbleProps {
  message: Message;
  roomAvatar: string;
  roomName: string;
}

export const MessageBubble = ({ message, roomAvatar, roomName }: MessageBubbleProps) => {
  const bubbleBgColor = message.isMine ? 'blue.500' : 'white';
  const bubbleTextColor = message.isMine ? 'white' : 'gray.800';

  return (
    <HStack justify={message.isMine ? 'flex-end' : 'flex-start'} w="full" spacing={2}>
      {!message.isMine && <Avatar size="sm" src={roomAvatar} name={roomName} />}
      <Box
        maxW="70%"
        bg={bubbleBgColor}
        color={bubbleTextColor}
        px={4}
        py={2}
        borderRadius="lg"
        shadow="sm"
      >
        <Text fontSize="sm">{message.content}</Text>
        <Text 
          fontSize="xs" 
          color={message.isMine ? 'whiteAlpha.800' : 'gray.500'} 
          textAlign="right"
        >
          {message.timestamp}
        </Text>
      </Box>
    </HStack>
  );
};
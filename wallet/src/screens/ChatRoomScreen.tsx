import React from 'react';
import { Box, VStack, HStack, Text, Avatar, Input, IconButton, useColorModeValue } from '@chakra-ui/react';
import { IoSendSharp, IoArrowBack } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageBubble } from '../components/chat/MessageBubble';
import { chatRooms } from '../types/chat';

const ChatRoomScreen = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  
  const chatRoom = chatRooms[roomId || ''];

  if (!chatRoom) {
    return (
      <Box h="100vh" bg={bgColor} p={4}>
        <HStack spacing={3} mb={4}>
          <IconButton
            aria-label="Back"
            icon={<IoArrowBack />}
            variant="ghost"
            onClick={() => navigate('/chat')}
          />
          <Text>채팅방을 찾을 수 없습니다</Text>
        </HStack>
      </Box>
    );
  }

  return (
    <Box h="100vh" bg={bgColor}>
      <VStack h="full" spacing={0}>
        <HStack w="full" p={4} bg="white" shadow="sm" justify="space-between">
          <HStack spacing={3}>
            <IconButton
              aria-label="Back"
              icon={<IoArrowBack />}
              variant="ghost"
              onClick={() => navigate('/chat')}
            />
            <Avatar size="sm" src={chatRoom.avatar} name={chatRoom.name} />
            <Text fontWeight="bold">{chatRoom.name}</Text>
          </HStack>
        </HStack>

        <VStack flex={1} w="full" p={4} spacing={4} overflowY="auto">
          {chatRoom.messages.map((message) => (
            <MessageBubble 
              key={message.id} 
              message={message} 
              roomAvatar={chatRoom.avatar}
              roomName={chatRoom.name}
            />
          ))}
        </VStack>

        <HStack w="full" p={4} bg="white" spacing={2}>
          <Input
            placeholder="메시지를 입력하세요"
            size="md"
            borderRadius="full"
          />
          <IconButton
            aria-label="Send message"
            icon={<IoSendSharp />}
            colorScheme="blue"
            borderRadius="full"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatRoomScreen;
import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  IconButton,
  Avatar,
  Flex,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoSendOutline, IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { chatRooms } from '../types/chat';

function ChatScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const chatList = Object.values(chatRooms);

  return (
    <Box>
      {/* Search Header */}
      <Box 
        p={4} 
        position="sticky" 
        top={0} 
        bg={bgColor} 
        borderBottom="1px" 
        borderColor={borderColor}
        zIndex={1}
      >
        <HStack>
          <Input
            placeholder="채팅방 검색"
            variant="filled"
            bg="gray.100"
            _focus={{
              bg: 'gray.100',
              borderColor: 'blue.500',
            }}
          />
          <IconButton
            aria-label="Search"
            icon={<IoSearchOutline />}
            variant="ghost"
          />
        </HStack>
      </Box>

      {/* Chat List */}
      <VStack spacing={0} divider={<Divider />}>
        {chatList.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];
          const unreadCount = chat.messages.filter(msg => !msg.isMine && msg.unread).length;

          return (
            <Box 
              key={chat.id}
              w="100%"
              p={4}
              cursor="pointer"
              _hover={{ bg: 'gray.50' }}
              transition="background 0.2s"
              onClick={() => navigate(`/chat/${chat.id}`)}
            >
              <HStack spacing={3} align="start">
                <Avatar size="md" src={chat.avatar} name={chat.name} />
                <VStack flex={1} align="start" spacing={1}>
                  <HStack justify="space-between" w="100%">
                    <Text fontWeight="bold">{chat.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {lastMessage?.timestamp}
                    </Text>
                  </HStack>
                  <Text 
                    fontSize="sm" 
                    color="gray.600"
                    noOfLines={1}
                  >
                    {lastMessage?.content}
                  </Text>
                </VStack>
                {unreadCount > 0 && (
                  <Flex
                    bg="blue.500"
                    color="white"
                    w={6}
                    h={6}
                    borderRadius="full"
                    justify="center"
                    align="center"
                    fontSize="xs"
                  >
                    {unreadCount}
                  </Flex>
                )}
              </HStack>
            </Box>
          );
        })}
      </VStack>

      {/* New Chat Button */}
      <IconButton
        aria-label="New chat"
        icon={<IoSendOutline />}
        position="fixed"
        bottom={20}
        right={4}
        colorScheme="blue"
        rounded="full"
        size="lg"
        shadow="lg"
      />
    </Box>
  );
}

export default ChatScreen;
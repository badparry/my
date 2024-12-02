import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoGridOutline, IoWalletOutline, IoChatbubbleOutline, IoEllipsisHorizontalOutline } from 'react-icons/io5';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: '피드', icon: IoGridOutline, path: '/' },
    { name: '지갑', icon: IoWalletOutline, path: '/wallet' },
    { name: '채팅', icon: IoChatbubbleOutline, path: '/chat' },
    { name: '더보기', icon: IoEllipsisHorizontalOutline, path: '/more' }
  ];

  return (
    <Box 
      position="absolute" 
      bottom={0} 
      width="100%"
      bg="white" 
      borderTopWidth={1} 
      borderColor="gray.200"
      px={4}
      py={2}
    >
      <Flex justify="space-between">
        {tabs.map(({ name, icon: Icon, path }) => (
          <Flex
            key={name}
            direction="column"
            align="center"
            py={2}
            px={4}
            cursor="pointer"
            color={location.pathname === path ? "blue.500" : "gray.500"}
            onClick={() => navigate(path)}
          >
            <Icon size={24} />
            <Text fontSize="xs" mt={1}>{name}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export default Navigation;
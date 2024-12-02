import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Switch,
  IconButton,
  useColorModeValue,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { 
  IoArrowBack,
  IoChatbubbleOutline,
  IoTrendingUpOutline,
  IoWalletOutline,
  IoNotificationsOutline,
  IoChevronForward,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function NotificationSettingsScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const notificationOptions = [
    {
      icon: IoNotificationsOutline,
      title: '전체 알림',
      description: '모든 알림을 켜거나 끕니다',
      hasSwitch: true,
      path: null,
    },
    {
      icon: IoWalletOutline,
      title: '거래 알림',
      description: '입출금 및 거래 관련 알림',
      hasSwitch: false,
      path: '/more/notifications/transaction',
      subSettings: [
        { title: '입금 알림', enabled: true },
        { title: '출금 알림', enabled: true },
        { title: '거래 확정 알림', enabled: true },
        { title: '가스비 변동 알림', enabled: false },
      ]
    },
    {
      icon: IoTrendingUpOutline,
      title: '가격 알림',
      description: '가격 변동 및 목표가 도달 알림',
      hasSwitch: false,
      path: '/more/notifications/price',
      subSettings: [
        { title: '급등 알림', enabled: true },
        { title: '급락 알림', enabled: true },
        { title: '목표가 도달 알림', enabled: true },
        { title: '시가총액 변동 알림', enabled: false },
      ]
    },
    {
      icon: IoChatbubbleOutline,
      title: '채팅 알림',
      description: '새로운 메시지 알림',
      hasSwitch: false,
      path: '/more/notifications/chat',
      subSettings: [
        { title: '새 메시지 알림', enabled: true },
        { title: '멘션 알림', enabled: true },
        { title: '채팅방 초대 알림', enabled: true },
        { title: '채팅방 활동 알림', enabled: false },
      ]
    },
  ];

  const handleOptionClick = (path: string | null) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box h="100vh" bg="gray.50">
      <Box bg={bgColor} borderBottom="1px" borderColor={borderColor}>
        <HStack p={4} spacing={4}>
          <IconButton
            icon={<IoArrowBack />}
            aria-label="Back"
            variant="ghost"
            onClick={() => navigate(-1)}
          />
          <Text fontSize="lg" fontWeight="600">알림</Text>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {notificationOptions.map((option, index) => (
              <Box
                key={index}
                w="100%"
                p={4}
                cursor="pointer"
                _hover={{ bg: 'gray.50' }}
                onClick={() => handleOptionClick(option.path)}
              >
                <HStack spacing={4} justify="space-between">
                  <HStack spacing={4}>
                    <Box
                      p={2}
                      borderRadius="lg"
                      bg="blue.50"
                      color="blue.500"
                    >
                      <option.icon size={24} />
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="600">{option.title}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {option.description}
                      </Text>
                    </VStack>
                  </HStack>
                  {option.hasSwitch ? (
                    <Switch colorScheme="blue" size="lg" />
                  ) : (
                    <Icon as={IoChevronForward} boxSize={5} color="gray.400" />
                  )}
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default NotificationSettingsScreen;
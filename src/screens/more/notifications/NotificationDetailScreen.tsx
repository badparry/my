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
} from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

interface NotificationSetting {
  title: string;
  enabled: boolean;
}

function NotificationDetailScreen() {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const getSettings = (): { title: string; settings: NotificationSetting[] } => {
    switch (type) {
      case 'transaction':
        return {
          title: '거래 알림',
          settings: [
            { title: '입금 알림', enabled: true },
            { title: '출금 알림', enabled: true },
            { title: '거래 확정 알림', enabled: true },
            { title: '가스비 변동 알림', enabled: false },
            { title: '스마트 컨트랙트 실행 알림', enabled: true },
            { title: '토큰 승인 알림', enabled: true },
          ]
        };
      case 'price':
        return {
          title: '가격 알림',
          settings: [
            { title: '급등 알림', enabled: true },
            { title: '급락 알림', enabled: true },
            { title: '목표가 도달 알림', enabled: true },
            { title: '시가총액 변동 알림', enabled: false },
            { title: '거래량 급증 알림', enabled: true },
            { title: '관심 코인 뉴스 알림', enabled: true },
          ]
        };
      case 'chat':
        return {
          title: '채팅 알림',
          settings: [
            { title: '새 메시지 알림', enabled: true },
            { title: '멘션 알림', enabled: true },
            { title: '채팅방 초대 알림', enabled: true },
            { title: '채팅방 활동 알림', enabled: false },
            { title: '채팅방 공지사항 알림', enabled: true },
            { title: '이모지 반응 알림', enabled: false },
          ]
        };
      default:
        return { title: '알림 설정', settings: [] };
    }
  };

  const { title, settings } = getSettings();

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
          <Text fontSize="lg" fontWeight="600">{title}</Text>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {settings.map((setting, index) => (
              <Box
                key={index}
                w="100%"
                p={4}
              >
                <HStack justify="space-between">
                  <Text fontWeight="500">{setting.title}</Text>
                  <Switch 
                    colorScheme="blue" 
                    size="lg"
                    defaultChecked={setting.enabled}
                  />
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default NotificationDetailScreen;
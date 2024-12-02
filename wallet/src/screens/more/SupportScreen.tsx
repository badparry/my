import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { 
  IoArrowBack,
  IoHelpCircleOutline,
  IoChatbubblesOutline,
  IoMailOutline,
  IoCallOutline
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function SupportScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const supportOptions = [
    {
      icon: IoHelpCircleOutline,
      title: '자주 묻는 질문',
      description: '일반적인 질문들에 대한 답변을 확인하세요',
    },
    {
      icon: IoChatbubblesOutline,
      title: '1:1 채팅 상담',
      description: '실시간으로 상담원과 대화하세요',
    },
    {
      icon: IoMailOutline,
      title: '이메일 문의',
      description: 'support@example.com',
    },
    {
      icon: IoCallOutline,
      title: '전화 상담',
      description: '평일 09:00 - 18:00',
    },
  ];

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
          <Text fontSize="lg" fontWeight="600">고객센터</Text>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {supportOptions.map((option, index) => (
              <Box
                key={index}
                w="100%"
                p={4}
                cursor="pointer"
                _hover={{ bg: 'gray.50' }}
                onClick={() => {}}
              >
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
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default SupportScreen;
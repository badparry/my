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
import { 
  IoArrowBack, 
  IoFingerPrintOutline, 
  IoLockClosedOutline,
  IoShieldCheckmarkOutline,
  IoKeyOutline
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function SecurityScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const securityOptions = [
    {
      icon: IoFingerPrintOutline,
      title: '생체 인증',
      description: '생체 정보로 빠르게 인증하세요',
      hasSwitch: true,
    },
    {
      icon: IoLockClosedOutline,
      title: '자동 잠금',
      description: '앱을 나갈 때 자동으로 잠급니다',
      hasSwitch: true,
    },
    {
      icon: IoKeyOutline,
      title: '비밀번호 변경',
      description: '앱 잠금 비밀번호를 변경합니다',
      hasSwitch: false,
    },
    {
      icon: IoShieldCheckmarkOutline,
      title: '2단계 인증',
      description: '추가 보안을 위한 2단계 인증을 설정합니다',
      hasSwitch: true,
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
          <Text fontSize="lg" fontWeight="600">보안</Text>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {securityOptions.map((option, index) => (
              <Box
                key={index}
                w="100%"
                p={4}
                cursor="pointer"
                _hover={{ bg: 'gray.50' }}
                onClick={() => {}}
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
                  {option.hasSwitch && (
                    <Switch colorScheme="blue" size="lg" />
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

export default SecurityScreen;
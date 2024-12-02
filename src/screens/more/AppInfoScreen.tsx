import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  useColorModeValue,
  Divider,
  Image,
} from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function AppInfoScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const appInfo = [
    { label: '버전', value: 'v1.0.0' },
    { label: '최근 업데이트', value: '2024.03.05' },
    { label: '개발사', value: 'Example Inc.' },
    { label: '라이선스', value: 'MIT License' },
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
          <Text fontSize="lg" fontWeight="600">앱 정보</Text>
        </HStack>
      </Box>

      <VStack spacing={6} p={4} align="center">
        <VStack spacing={2} pt={8} pb={4}>
          <Box boxSize="80px" mb={2}>
            <Image
              src="/icons/wallet.svg"
              alt="App Logo"
              borderRadius="xl"
            />
          </Box>
          <Text fontSize="xl" fontWeight="bold">크립토 월렛</Text>
          <Text color="gray.500">안전하고 편리한 암호화폐 지갑</Text>
        </VStack>

        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {appInfo.map((info, index) => (
              <Box
                key={index}
                w="100%"
                p={4}
              >
                <HStack justify="space-between">
                  <Text color="gray.500">{info.label}</Text>
                  <Text fontWeight="500">{info.value}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>

        <VStack spacing={2} pt={4}>
          <Text fontSize="sm" color="gray.500">
            © 2024 Example Inc. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <Text fontSize="sm" color="blue.500" cursor="pointer">
              이용약관
            </Text>
            <Text fontSize="sm" color="blue.500" cursor="pointer">
              개인정보처리방침
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default AppInfoScreen;
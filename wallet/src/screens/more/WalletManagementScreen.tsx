import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { IoArrowBack, IoWalletOutline, IoKeyOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function WalletManagementScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const walletOptions = [
    {
      icon: IoKeyOutline,
      title: '개인키 백업',
      description: '지갑의 개인키를 안전하게 백업하세요',
    },
    {
      icon: IoDocumentTextOutline,
      title: '니모닉 구문 보기',
      description: '12개 단어로 이루어진 복구 구문을 확인하세요',
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
          <Text fontSize="lg" fontWeight="600">지갑 관리</Text>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {walletOptions.map((option, index) => (
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

        <Button
          colorScheme="red"
          variant="outline"
          w="100%"
          size="lg"
        >
          지갑 초기화
        </Button>
      </VStack>
    </Box>
  );
}

export default WalletManagementScreen;
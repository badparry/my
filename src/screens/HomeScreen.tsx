import React from 'react';
import { Box, VStack, HStack, Text, Image, Flex, Button } from '@chakra-ui/react';
import { IoWarning, IoScan } from 'react-icons/io5';

function HomeScreen() {
  const tokens = [
    { name: 'Bitcoin', symbol: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { name: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { name: 'Cardano', symbol: 'ADA', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png' }
  ];

  return (
    <Box p={4}>
      <Box bg="red.50" p={4} borderRadius="lg" mb={6}>
        <HStack spacing={2}>
          <IoWarning color="red" />
          <Text color="red.500" fontSize="sm">아직 지갑 백업을 안하셨어요!</Text>
        </HStack>
      </Box>

      <HStack spacing={4} overflowX="auto" pb={4} mb={6}>
        <VStack 
          align="center" 
          minW="80px" 
          cursor="pointer"
        >
          <Box 
            p={3} 
            borderRadius="lg" 
            bg="gray.100"
          >
            <Image 
              src="https://img.icons8.com/ios/50/000000/wallet--v1.png" 
              boxSize="24px"
            />
          </Box>
          <Text fontSize="xs">내 자산</Text>
        </VStack>
        {tokens.map((token) => (
          <VStack 
            key={token.symbol} 
            align="center" 
            minW="80px" 
            cursor="pointer"
          >
            <Box 
              p={3} 
              borderRadius="lg" 
              bg="gray.100"
            >
              <Image 
                src={token.icon} 
                boxSize="24px"
              />
            </Box>
            <Text fontSize="xs">{token.name}</Text>
          </VStack>
        ))}
      </HStack>

      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Text fontWeight="bold">토큰</Text>
          <Text fontWeight="bold">NFT</Text>
        </HStack>

        <Box 
          p={4} 
          borderRadius="lg" 
          border="1px" 
          borderColor="gray.200"
        >
          <HStack justify="space-between">
            <HStack spacing={3}>
              <Image 
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
                boxSize="40px"
              />
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold">BTC</Text>
                <Text fontSize="lg">585.91960217</Text>
              </VStack>
            </HStack>
            <IoScan size={24} />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default HomeScreen;
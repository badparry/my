import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Input,
  FormControl,
  FormLabel,
  IconButton
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { IoScanOutline } from 'react-icons/io5';
import QRCode from 'qrcode.react';

const TransactionItem = ({ type, amount, address, date, time }) => (
  <Box p={4} bg="white" borderRadius="lg">
    <HStack justify="space-between">
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">{type}</Text>
        <Text fontSize="sm" color="gray.500">{address}</Text>
        <Text fontSize="sm" color="gray.500">{date} {time}</Text>
      </VStack>
      <Text fontWeight="bold" color={type === '받기' ? 'green.500' : 'red.500'}>
        {type === '받기' ? '+' : '-'}{amount}
      </Text>
    </HStack>
  </Box>
);

function TokenDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tokens = {
    btc: {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: '0.05421',
      value: '24,152.32',
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
    },
    eth: {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '1.24891',
      value: '2,891.15',
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
    },
    sol: {
      name: 'Solana',
      symbol: 'SOL',
      balance: '15.5231',
      value: '1,242.50',
      icon: 'https://cryptologos.cc/logos/solana-sol-logo.png'
    }
  };

  const token = tokens[id?.toLowerCase()] || tokens.btc;

  const transactions = [
    { type: '받기', amount: `0.1 ${token.symbol}`, address: '0x1234...5678', date: '2024.03.05', time: '14:30' },
    { type: '보내기', amount: `0.05 ${token.symbol}`, address: '0x8765...4321', date: '2024.03.04', time: '11:20' },
    { type: '받기', amount: `0.2 ${token.symbol}`, address: '0x9876...5432', date: '2024.03.03', time: '09:15' }
  ];

  return (
    <Box>
      <HStack 
        p={4} 
        bg="white" 
        position="sticky" 
        top={0} 
        zIndex={10}
        borderBottom="1px"
        borderColor="gray.100"
        spacing={4}
        align="center"
      >
        <IconButton
          aria-label="Back"
          icon={<ArrowBackIcon />}
          variant="ghost"
          onClick={() => navigate(-1)}
          size="sm"
        />
        <HStack spacing={2} align="center">
          <Image src={token.icon} boxSize="24px" />
          <Text fontSize="lg" fontWeight="bold">{token.name}</Text>
        </HStack>
      </HStack>

      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="white" p={6} borderRadius="lg" textAlign="center">
            <Text fontSize="sm" color="gray.500">총 자산</Text>
            <Text fontSize="3xl" fontWeight="bold">{token.balance} {token.symbol}</Text>
            <Text color="gray.500">${token.value} USD</Text>
          </Box>

          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>거래내역</Tab>
              <Tab>보내기</Tab>
              <Tab>받기</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <VStack spacing={2}>
                  {transactions.map((tx, index) => (
                    <TransactionItem key={index} {...tx} />
                  ))}
                </VStack>
              </TabPanel>
              <TabPanel>
                <Box bg="white" p={6} borderRadius="lg">
                  <VStack spacing={4}>
                    <FormControl>
                      <FormLabel>받는 주소</FormLabel>
                      <Input placeholder="지갑 주소를 입력하세요" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>수량</FormLabel>
                      <Input placeholder="보낼 수량을 입력하세요" />
                    </FormControl>
                    <Button colorScheme="blue" width="100%">
                      보내기
                    </Button>
                  </VStack>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box bg="white" p={6} borderRadius="lg">
                  <VStack spacing={4} align="center">
                    <QRCode value="your-wallet-address" size={200} />
                    <Text fontSize="sm" color="gray.500">QR코드를 스캔하여 받기</Text>
                    <Button leftIcon={<IoScanOutline />} variant="outline" width="100%">
                      QR코드 스캔하기
                    </Button>
                  </VStack>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
    </Box>
  );
}

export default TokenDetailScreen;
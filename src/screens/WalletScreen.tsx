import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  Button,
  Circle,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoScanOutline, IoArrowUpOutline, IoArrowDownOutline } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';
import NFTGrid from '../components/NFTGrid';
import { nftData } from '../data/nftData';
import { useVerticalScroll } from '../hooks/useVerticalScroll';

const TAB_STATE_KEY = 'wallet-tab-index';

function WalletScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(() => {
    // URL에서 탭 상태 확인
    const isNFTRoute = location.pathname.includes('/nft');
    // localStorage에서 저장된 탭 상태 확인
    const savedIndex = localStorage.getItem(TAB_STATE_KEY);
    
    if (isNFTRoute) {
      return 1;
    } else if (savedIndex !== null) {
      return parseInt(savedIndex);
    }
    return 0;
  });

  const bgGradient = useColorModeValue(
    'linear(to-br, blue.400, blue.600)',
    'linear(to-br, blue.600, blue.800)'
  );

  const { 
    scrollRef: tokenListRef, 
    isDragging: isTokenDragging, 
    handlers: tokenHandlers 
  } = useVerticalScroll({ speedMultiplier: 1 });

  const { 
    scrollRef: nftListRef, 
    isDragging: isNftDragging, 
    handlers: nftHandlers 
  } = useVerticalScroll({ speedMultiplier: 1 });

  // 탭 변경 시 localStorage에 상태 저장
  const handleTabChange = (index: number) => {
    setTabIndex(index);
    localStorage.setItem(TAB_STATE_KEY, index.toString());
  };

  const tokens = [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      balance: '0.05421', 
      value: '24,152.32',
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      change: '+3.52%'
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      balance: '1.24891', 
      value: '2,891.15',
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      change: '+5.21%'
    },
    { 
      name: 'Solana', 
      symbol: 'SOL', 
      balance: '15.5231', 
      value: '1,242.50',
      icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      change: '-2.15%'
    },
  ];

  const totalValue = tokens.reduce((sum, token) => sum + parseFloat(token.value.replace(',', '')), 0);

  const handleNFTClick = (id: string) => {
    navigate(`/wallet/nft/${id}`);
  };

  const handleTokenClick = (symbol: string) => {
    if (isTokenDragging) return;
    navigate(`/wallet/token/${symbol.toLowerCase()}`);
  };

  return (
    <Box h="100%" display="flex" flexDirection="column">
      {/* Fixed Header Section */}
      <Box bg="white">
        <Box 
          bgGradient={bgGradient}
          color="white"
          p={6}
          mx={4}
          mt={4}
          mb={6}
          borderRadius="2xl"
        >
          <Text fontSize="sm" mb={1}>총 자산</Text>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>${totalValue.toLocaleString()}</Text>
          
          <HStack spacing={4} justify="center">
            <Button
              leftIcon={<IoArrowUpOutline />}
              bg="whiteAlpha.200"
              color="white"
              _hover={{ bg: 'whiteAlpha.300' }}
              size="sm"
            >
              보내기
            </Button>
            <Button
              leftIcon={<IoArrowDownOutline />}
              bg="whiteAlpha.200"
              color="white"
              _hover={{ bg: 'whiteAlpha.300' }}
              size="sm"
            >
              받기
            </Button>
            <Button
              leftIcon={<IoScanOutline />}
              bg="whiteAlpha.200"
              color="white"
              _hover={{ bg: 'whiteAlpha.300' }}
              size="sm"
            >
              스캔
            </Button>
          </HStack>
        </Box>

        <Box px={4} pb={4}>
          <Tabs 
            variant="soft-rounded" 
            colorScheme="blue" 
            index={tabIndex} 
            onChange={handleTabChange}
          >
            <TabList>
              <Tab>토큰</Tab>
              <Tab>NFT</Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>

      {/* Scrollable Content Section */}
      <Box flex={1} overflow="hidden">
        {tabIndex === 0 ? (
          <Box
            ref={tokenListRef}
            h="100%"
            overflowY="auto"
            px={4}
            {...tokenHandlers}
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              cursor: isTokenDragging ? 'grabbing' : 'grab'
            }}
          >
            <VStack spacing={3} pb={20}>
              {tokens.map((token) => (
                <Box 
                  key={token.symbol}
                  bg="white" 
                  p={4} 
                  borderRadius="2xl"
                  shadow="sm"
                  w="100%"
                  onClick={() => handleTokenClick(token.symbol)}
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                >
                  <HStack justify="space-between" align="center">
                    <HStack spacing={3}>
                      <Circle size="40px" bg="gray.50" p={2}>
                        <Image src={token.icon} alt={token.name} />
                      </Circle>
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold">{token.symbol}</Text>
                        <Text fontSize="sm" color="gray.500">{token.name}</Text>
                      </VStack>
                    </HStack>
                    <VStack align="end" spacing={0}>
                      <Text fontWeight="semibold">{token.balance}</Text>
                      <HStack spacing={1}>
                        <Text fontSize="sm" color="gray.500">${token.value}</Text>
                        <Text 
                          fontSize="sm" 
                          color={token.change.startsWith('+') ? 'green.500' : 'red.500'}
                        >
                          {token.change}
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        ) : (
          <Box
            ref={nftListRef}
            h="100%"
            overflowY="auto"
            px={4}
            {...nftHandlers}
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              cursor: isNftDragging ? 'grabbing' : 'grab'
            }}
          >
            <NFTGrid nfts={nftData} onNFTClick={handleNFTClick} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default WalletScreen;
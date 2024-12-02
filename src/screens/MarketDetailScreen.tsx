import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  IconButton,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { coinData } from '../data/coinData';

function MarketDetailScreen() {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const coin = coinData[coinId as keyof typeof coinData];

  if (!coin) {
    return (
      <Container maxW="390px" h="100vh" p={4}>
        <Text>코인을 찾을 수 없습니다.</Text>
      </Container>
    );
  }

  return (
    <Container maxW="390px" h="100vh" p={0}>
      <Box bg="white" position="sticky" top={0} zIndex={10} borderBottom="1px solid" borderColor="gray.100">
        <HStack p={4} justify="space-between" align="center">
          <IconButton
            icon={<ArrowBackIcon />}
            aria-label="Back"
            variant="ghost"
            onClick={() => navigate(-1)}
          />
          <Text fontSize="lg" fontWeight="600">{coin.name}</Text>
          <Box w={8} /> {/* Spacer */}
        </HStack>
      </Box>

      <VStack spacing={6} p={4} align="stretch">
        <HStack spacing={4}>
          <Image src={coin.icon} alt={coin.name} boxSize="48px" />
          <VStack align="start" spacing={0}>
            <Text fontSize="2xl" fontWeight="bold">{coin.symbol.toUpperCase()}</Text>
            <Text color="gray.500">{coin.name}</Text>
          </VStack>
        </HStack>

        <Box bg="white" p={4} borderRadius="lg" shadow="sm">
          <VStack align="start" spacing={4}>
            <Stat>
              <StatLabel>현재가</StatLabel>
              <StatNumber fontSize="2xl">
                ${coin.price.toLocaleString()}
                <StatArrow type={coin.priceChange >= 0 ? 'increase' : 'decrease'} />
                {Math.abs(coin.priceChange)}%
              </StatNumber>
            </Stat>
          </VStack>
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Box bg="white" p={4} borderRadius="lg" shadow="sm">
              <Text color="gray.500">시가총액</Text>
              <Text fontSize="lg" fontWeight="bold">${coin.marketCap}</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" p={4} borderRadius="lg" shadow="sm">
              <Text color="gray.500">거래량</Text>
              <Text fontSize="lg" fontWeight="bold">${coin.volume}</Text>
            </Box>
          </GridItem>
        </Grid>

        <Box bg="white" p={4} borderRadius="lg" shadow="sm">
          <Heading size="sm" mb={3}>코인 소개</Heading>
          <Text color="gray.600">{coin.description}</Text>
        </Box>

        <HStack spacing={4}>
          <Button colorScheme="blue" flex={1} h={12}>
            매수
          </Button>
          <Button colorScheme="red" flex={1} h={12}>
            매도
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default MarketDetailScreen;
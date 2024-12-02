import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  IconButton,
  Button,
  Tag,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoArrowBack, IoShareSocialOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { nftData } from '../data/nftData';

function NFTDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const nft = nftData.find(item => item.id === id);

  if (!nft) {
    return (
      <Box p={4}>
        <Text>NFT를 찾을 수 없습니다.</Text>
      </Box>
    );
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return 'purple';
      case 'Epic':
        return 'pink';
      case 'Rare':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <Box bg={bgColor} h="100%" display="flex" flexDirection="column">
      <Box bg="white" position="sticky" top={0} zIndex={10} shadow="sm">
        <HStack p={4} justify="space-between">
          <IconButton
            icon={<IoArrowBack />}
            aria-label="Back"
            variant="ghost"
            onClick={() => navigate(-1)}
          />
          <IconButton
            icon={<IoShareSocialOutline />}
            aria-label="Share"
            variant="ghost"
          />
        </HStack>
      </Box>

      <Box flex={1} overflowY="auto">
        <VStack spacing={6} p={4} pb={0}>
          <Box
            borderRadius="2xl"
            overflow="hidden"
            bg="white"
            shadow="sm"
            position="relative"
          >
            <Image
              src={nft.image}
              alt={nft.name}
              w="100%"
              h="300px"
              objectFit="cover"
            />
            <Tag
              position="absolute"
              top={4}
              right={4}
              size="lg"
              colorScheme={getRarityColor(nft.rarity)}
              px={4}
              py={2}
              borderRadius="full"
            >
              {nft.rarity}
            </Tag>
          </Box>

          <Box bg="white" p={6} borderRadius="2xl" shadow="sm" w="100%">
            <VStack align="start" spacing={4}>
              <VStack align="start" spacing={1} w="100%">
                <Text fontSize="2xl" fontWeight="bold">{nft.name}</Text>
                <Text color="gray.500">{nft.collection}</Text>
              </VStack>

              <HStack justify="space-between" w="100%" py={4} borderY="1px" borderColor="gray.100">
                <VStack align="start">
                  <Text color="gray.500" fontSize="sm">Floor Price</Text>
                  <Text fontWeight="bold">0.5 ETH</Text>
                </VStack>
                <VStack align="start">
                  <Text color="gray.500" fontSize="sm">Token ID</Text>
                  <Text fontWeight="bold">#1234</Text>
                </VStack>
              </HStack>

              {nft.description && (
                <Box w="100%">
                  <Text fontWeight="semibold" mb={2}>Description</Text>
                  <Text color="gray.600">{nft.description}</Text>
                </Box>
              )}

              {nft.attributes && (
                <Box w="100%">
                  <Text fontWeight="semibold" mb={3}>Attributes</Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                    {nft.attributes.map((attr, index) => (
                      <GridItem key={index}>
                        <Box
                          bg="gray.50"
                          p={3}
                          borderRadius="lg"
                          border="1px"
                          borderColor="gray.100"
                        >
                          <Text color="gray.500" fontSize="sm">
                            {attr.trait_type}
                          </Text>
                          <Text fontWeight="semibold">
                            {attr.value}
                          </Text>
                        </Box>
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              )}
            </VStack>
          </Box>
        </VStack>
      </Box>

      <Box p={4} bg="white" borderTop="1px" borderColor="gray.100">
        <HStack spacing={4}>
          <Button colorScheme="blue" size="lg" flex={1}>
            구매하기
          </Button>
          <Button variant="outline" size="lg" flex={1}>
            제안하기
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default NFTDetailScreen;
import React from 'react';
import { Box, Image, Text, VStack, HStack, Tag, Badge } from '@chakra-ui/react';

interface NFTCardProps {
  name: string;
  collection: string;
  image: string;
  rarity: string;
  onClick: () => void;
}

function NFTCard({ name, collection, image, rarity, onClick }: NFTCardProps) {
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
    <Box
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
      position="relative"
      borderWidth="1px"
      borderColor="gray.100"
    >
      <Box position="relative">
        <Image
          src={image}
          alt={name}
          w="100%"
          h="200px"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top={3}
          right={3}
          px={3}
          py={1}
          borderRadius="full"
          colorScheme={getRarityColor(rarity)}
          textTransform="none"
          fontSize="xs"
          fontWeight="bold"
        >
          {rarity}
        </Badge>
      </Box>

      <VStack 
        align="start" 
        p={4} 
        spacing={2}
        bg="white"
        borderTopWidth="1px"
        borderColor="gray.100"
      >
        <VStack align="start" spacing={1} w="100%">
          <Text 
            fontWeight="bold" 
            fontSize="lg"
            noOfLines={1}
          >
            {name}
          </Text>
          <Text 
            color="gray.500" 
            fontSize="sm"
            noOfLines={1}
          >
            {collection}
          </Text>
        </VStack>

        <HStack 
          w="100%" 
          justify="space-between"
          pt={2}
          borderTopWidth="1px"
          borderColor="gray.100"
        >
          <Tag size="sm" variant="subtle" colorScheme="blue">
            #1234
          </Tag>
          <Text fontSize="sm" color="gray.500">
            Floor: 0.5 ETH
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default NFTCard;
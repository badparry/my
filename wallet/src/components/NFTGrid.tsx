import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import NFTCard from './NFTCard';
import { NFTItem } from '../types/nft';

interface NFTGridProps {
  nfts: NFTItem[];
  onNFTClick: (id: string) => void;
}

function NFTGrid({ nfts, onNFTClick }: NFTGridProps) {
  return (
    <SimpleGrid 
      columns={2} 
      spacing={4}
      pb={4}
    >
      {nfts.map((nft) => (
        <NFTCard
          key={nft.id}
          name={nft.name}
          collection={nft.collection}
          image={nft.image}
          rarity={nft.rarity}
          onClick={() => onNFTClick(nft.id)}
        />
      ))}
    </SimpleGrid>
  );
}

export default NFTGrid;
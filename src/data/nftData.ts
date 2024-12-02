import { NFTItem } from '../types/nft';

export const nftData: NFTItem[] = [
  {
    id: 'nft1',
    name: 'Cyber Punk #1337',
    collection: 'Cyber Punks',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80',
    rarity: 'Legendary',
    description: 'A legendary cyber punk character with unique traits.',
    attributes: [
      { trait_type: 'Background', value: 'Neon City' },
      { trait_type: 'Outfit', value: 'Cyber Suit' },
      { trait_type: 'Weapon', value: 'Plasma Sword' }
    ]
  },
  {
    id: 'nft2',
    name: 'Space Cat #42',
    collection: 'Space Cats',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    rarity: 'Epic',
    description: 'A rare space cat exploring the galaxy.',
    attributes: [
      { trait_type: 'Background', value: 'Deep Space' },
      { trait_type: 'Suit', value: 'Astronaut' },
      { trait_type: 'Accessory', value: 'Laser Eyes' }
    ]
  },
  {
    id: 'nft3',
    name: 'Pixel Dragon #789',
    collection: 'Pixel Monsters',
    image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800&q=80',
    rarity: 'Rare',
    description: 'A pixelated dragon with fire-breathing abilities.',
    attributes: [
      { trait_type: 'Element', value: 'Fire' },
      { trait_type: 'Level', value: '60' },
      { trait_type: 'Power', value: 'Flame Burst' }
    ]
  },
  {
    id: 'nft4',
    name: 'Meta Ape #555',
    collection: 'Meta Apes',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    rarity: 'Epic',
    description: 'A unique meta ape from the digital jungle.',
    attributes: [
      { trait_type: 'Background', value: 'Jungle' },
      { trait_type: 'Outfit', value: 'Golden Suit' },
      { trait_type: 'Accessory', value: 'Diamond Chain' }
    ]
  }
];
export interface NFTItem {
  id: string;
  name: string;
  collection: string;
  image: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  description?: string;
  attributes?: {
    trait_type: string;
    value: string;
  }[];
}
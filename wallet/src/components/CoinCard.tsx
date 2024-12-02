import React from 'react';

interface CoinCardProps {
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
}

export default function CoinCard({ name, symbol, price, priceChange }: CoinCardProps) {
  const priceChangeColor = priceChange >= 0 ? '#4CAF50' : '#F44336';

  return (
    <div className="coin-card">
      <div className="coin-info">
        <h3>{name}</h3>
        <p className="symbol">{symbol.toUpperCase()}</p>
      </div>
      <div className="coin-price">
        <p className="price">${price.toLocaleString()}</p>
        <p className="change" style={{ color: priceChangeColor }}>
          {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
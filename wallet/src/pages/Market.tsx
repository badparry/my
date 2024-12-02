import React, { useState, useEffect } from 'react';
import './Market.css';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function Market() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false'
        );
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setLoading(false);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="market-container">
      <h2>Market Overview</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="coin-list">
          {coins.map((coin) => (
            <div key={coin.id} className="coin-card">
              <div className="coin-info">
                <h3>{coin.name}</h3>
                <p className="symbol">{coin.symbol.toUpperCase()}</p>
              </div>
              <div className="coin-price">
                <p className="price">${coin.current_price.toLocaleString()}</p>
                <p className={`change ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Market;
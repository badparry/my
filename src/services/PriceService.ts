interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export class PriceService {
  private static readonly API_URL = 'https://api.coingecko.com/api/v3';

  async getTopCoins(limit: number = 10): Promise<CoinPrice[]> {
    try {
      const response = await fetch(
        `${PriceService.API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&sparkline=false`
      );
      return await response.json();
    } catch (error) {
      console.error('Error fetching coin prices:', error);
      return [];
    }
  }

  async getCoinPrice(coinId: string): Promise<number | null> {
    try {
      const response = await fetch(
        `${PriceService.API_URL}/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      const data = await response.json();
      return data[coinId]?.usd || null;
    } catch (error) {
      console.error('Error fetching coin price:', error);
      return null;
    }
  }
}
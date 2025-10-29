export type CoinIcon = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  market_cap_rank?: number;
};

/**
 * Fetch top coins from CoinGecko markets endpoint.
 * Returns an array of { id, symbol, name, image, market_cap_rank }.
 */
export async function fetchTopCoins(limit = 50, vsCurrency = 'usd'): Promise<CoinIcon[]> {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${encodeURIComponent(
    vsCurrency
  )}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`CoinGecko request failed with status ${res.status}`);
  }

  const data = (await res.json()) as any[];
  return data.map((c) => ({
    id: c.id,
    symbol: c.symbol,
    name: c.name,
    image: c.image,
    market_cap_rank: c.market_cap_rank,
  }));
}

/**
 * Convenience helper: fetch top 50 icons (id, name, symbol, image)
 */
export async function fetchTop50Icons(): Promise<CoinIcon[]> {
  return fetchTopCoins(50, 'usd');
}

/**
 * Example usage:
 *
 * import { fetchTop50Icons } from '../services/coinGecko';
 * const icons = await fetchTop50Icons();
 * icons[0].image // URL string
 */

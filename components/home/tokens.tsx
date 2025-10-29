import React from 'react';
import { Text, View } from 'react-native';

export type MarketToken = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  total_volume: number;
  market_cap: number;
  price_change_percentage_24h?: number;
};



const Tokens = () => {
  return (
    <View>
      <Text>Tokens</Text>
    </View>
  );
};

export default Tokens;

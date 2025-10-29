import { Trophy } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AirDrops = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.RewardsContainer}>
        <Trophy color="white" size={18} strokeWidth={2} />
        <Text style={styles.RewardsText}>Rewards</Text>
      </View>
      <View style={styles.cardDescriptionContainer}>
        <Text style={styles.cardTitle}>You have 2 Airdrops</Text>
        <Text style={styles.cardDescription}>Available to claim</Text>
      </View>
      <View style={styles.rewardCardCircle} />
      <View style={styles.rewardCardCircle} />
      <View style={styles.airdropIcons}>
        <View style={styles.airdropIcon1}>
          <Image
            source={{
              uri: 'https://coin-images.coingecko.com/coins/images/877/large/Chainlink_Logo_500.png?1760023405',
            }}
            style={styles.airdropIconImage}
          />
        </View>
        <View style={styles.airdropIcon2}>
          <Image
            source={{
              uri: 'https://coin-images.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg?1696527447',
            }}
            style={styles.airdropIconImage}
          />
        </View>
      </View>
    </View>
  );
};

export default AirDrops;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FDCB1F',
    marginTop: 20,
    padding: 16,
    borderRadius: 24,
    marginVertical: 8,
    overflow: 'hidden',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 3,
  },
  RewardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 50,
  },
  RewardsText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  cardDescriptionContainer: {
    marginTop: 12,
    gap: 4,
  },
  cardTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  cardDescription: {
    color: '#926204',
    fontSize: 14,
    fontWeight: '600',
  },
  rewardCardCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    right: 10,
    top: 2,
    bottom: 10,
  },
  airdropIcons: {
    position: 'absolute',
    top: 20,
    right: 14,
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    height: 70,
  },
  airdropIcon1: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: 'hidden',

    zIndex: 2,
    top: 10,
    marginRight: -2,
  },
  airdropIcon2: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: 'hidden',
    transform: [{ rotate: '4deg' }],
    zIndex: 1,
    marginLeft: -18,
  },
  airdropIconImage: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: '#FDD54A',
    borderRadius: 35,
    resizeMode: 'cover',
  },
});

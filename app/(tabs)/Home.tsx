import { Copy } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { data } from '../../data';

const Home = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.profileContainer}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={style.profile}
            resizeMode="contain"
          />
          <View style={style.walletAddressContainer}>
            <View style={style.walletAddressTextContainer}>
              <Text style={style.walletAddressText}>
                {data[0].walletAddress.slice(0, 4)}...{data[0].walletAddress.slice(-4)}
              </Text>
              <Copy color="#62686E" size={18} style={{ marginRight: 8 }} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  walletAddress: {
    color: 'white',
    fontSize: 12,
  },
  walletAddressTextContainer: {
    color: 'gray',
    backgroundColor: '#191918',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
  },
  walletAddressContainer: {
    marginLeft: 'auto',
  },
  walletAddressText: {
    color: '#606870',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: '#191918',
    padding: 8,
    borderRadius: 50,
  },
});

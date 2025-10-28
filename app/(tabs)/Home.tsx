import * as Clipboard from 'expo-clipboard';
import { ArrowRightLeft, ArrowUpRight, Check, Copy, Plus } from 'lucide-react-native';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { data } from '../../data';

export const ActionButtonsData = [
  { id: 1, title: 'Deposit', icon: Plus },
  { id: 2, title: 'Withdraw', icon: ArrowUpRight },
  { id: 3, title: 'Swap', icon: ArrowRightLeft },
];

const AnimatedCopy = Animated.createAnimatedComponent(Copy);
const AnimatedCheck = Animated.createAnimatedComponent(Check);

type CopyToTickProps = {
  text: string;
  onCopied?: () => void;
};

export type CopyToTickRef = {
  triggerCopy: () => void;
};

const CopyToTick = forwardRef<CopyToTickRef, CopyToTickProps>(({ text, onCopied }, ref) => {
  const copied = useSharedValue(0);

  const copyStyle = useAnimatedStyle(() => ({
    opacity: 1 - copied.value,
    transform: [{ scale: 1 - 0.4 * copied.value }],
  }));

  const checkStyle = useAnimatedStyle(() => ({
    opacity: copied.value,
    transform: [{ scale: 0.85 + 0.15 * copied.value }],
  }));

  const handlePress = async () => {
    await Clipboard.setStringAsync(text);

    copied.value = withSequence(
      withTiming(1, { duration: 300 }),
      withDelay(800, withTiming(0, { duration: 300 }))
    );
    onCopied?.();
  };

  useImperativeHandle(ref, () => ({
    triggerCopy: handlePress,
  }));

  return (
    <TouchableOpacity onPress={handlePress} style={style.iconWrapper} activeOpacity={0.8}>
      {/* Animate wrappers instead of the SVG icon directly */}
      <Animated.View style={[style.icon, copyStyle]}>
        <Copy color="#62686E" size={16} strokeWidth={3} />
      </Animated.View>
      <Animated.View style={[style.icon, checkStyle]}>
        <Check color="#8CE99A" size={16} strokeWidth={3} />
      </Animated.View>
    </TouchableOpacity>
  );
});

const Home = () => {
  const copyRef = React.useRef<CopyToTickRef>(null);
  const [presses, isPressed] = useState();
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (buttonId: any) => {
    // Toggle logic
    setActiveButton((prev) => (prev === buttonId ? null : buttonId));
  };
  const copyWalletAddress = () => {
    copyRef.current?.triggerCopy();
  };

  return (
    <ScrollView>
      <View style={style.container}>
        {/* Profile Card */}

        <View style={style.profileContainer}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={style.profile}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={style.walletAddressContainer}
            onPress={copyWalletAddress}
            activeOpacity={0.7}>
            <View style={style.walletAddressTextContainer}>
              <Text style={style.walletAddressText}>
                {data[0].walletAddress.slice(0, 4)}...{data[0].walletAddress.slice(-4)}
              </Text>
              <CopyToTick ref={copyRef} text={data[0].walletAddress} />
            </View>
          </TouchableOpacity>
        </View>
        {/* Balance Section */}
        <View style={style.balanceContainer}>
          <Text style={style.balanceText}>$11,230.09</Text>
          <View style={style.increaseContainer}>
            <ArrowUpRight color="green" size={16} strokeWidth={4} />
            <Text style={style.arrowIconText}>19.40%</Text>
          </View>
        </View>
        {/* Followers Section */}
        <View style={style.followingContainer}>
          <View>
            <Text style={style.followingText}>104 Followers</Text>
          </View>
          <View>
            <Text style={style.followingText}>326 Following</Text>
          </View>
        </View>
        {/* Action Buttons */}
        <View style={style.ActionButtonContainer}>
          {ActionButtonsData.map((button) => {
            const isActive = activeButton === button.id;

            return (
              <TouchableOpacity
                key={button.id}
                style={[style.actionButton, isActive && style.activeActionButton]}
                onPress={() => handlePress(button.id)}>
                <button.icon color={isActive ? 'black' : 'white'} size={20} />
                <Text style={[style.actionButtonText, { color: isActive ? 'black' : 'white' }]}>
                  {button.title}
                </Text>
              </TouchableOpacity>
            );
          })}
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
    paddingHorizontal: 6,
  },
  profile: {
    width: 80,
    height: 80,
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
    padding: 6,
    borderRadius: 50,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
  },
  balanceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIconText: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 4,
  },
  increaseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    gap: 2,
    justifyContent: 'flex-end',
  },
  followingText: {
    color: '#62686E',
    fontSize: 14,
    fontWeight: '700',
  },
  followingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 15,
    justifyContent: 'flex-start',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#191918',
    borderRadius: 15,
  },
  activeActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  activeActionButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  ActionButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
    justifyContent: 'space-between',
  },
});

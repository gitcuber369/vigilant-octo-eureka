import Tabs from 'components/bottom-tabs';
import { BlurView } from 'expo-blur';
import {
  CircleEllipsis,
  Globe,
  Home as HomeIcon,
  Sailboat,
  Scan,
  Search,
  WalletMinimal,
} from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          height: 100,
          paddingTop: 20,
          paddingHorizontal: 10,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark" // options: "light" | "dark" | "default"
            intensity={50} // blur strength
            style={StyleSheet.absoluteFill}
          />
        ),
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: true,
          sceneStyle: { backgroundColor: 'black' },
          headerStyle: { backgroundColor: 'black' },
          headerLeft: () => (
            <TouchableOpacity>
              <Scan color="white" size={22} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <CircleEllipsis color="white" size={22} />
            </TouchableOpacity>
          ),
          headerTitleStyle: { color: 'white' },
          title: 'Welcome back',
          tabBarIcon: ({ color, size }) => <HomeIcon color={color as string} size={22} />,
        }}
      />
      <Tabs.Screen
        name="Wallet"
        options={{
          tabBarIcon: ({ color, size }) => <WalletMinimal color={color as string} size={22} />,
        }}
      />
      <Tabs.Screen
        name="Web"
        options={{
          tabBarIcon: ({ color, size }) => <Globe color={color as string} size={22} />,
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, size }) => <Search color={color as string} size={22} />,
        }}
      />
      <Tabs.Screen
        name="Connect"
        options={{
          tabBarIcon: ({ color, size }) => <Sailboat color={color as string} size={22} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

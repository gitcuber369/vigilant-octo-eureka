import { Stack } from 'expo-router';
import React from 'react';

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'black' },
      }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default AppLayout;

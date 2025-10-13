import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Home" onPress={() => { 
        router.push('/(tabs)/Home');
      }} />
    </View>
  );
}
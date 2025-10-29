import { Redirect } from 'expo-router';

export default function Index() {
  // Use a declarative Redirect so navigation happens after layout mounts.
  return <Redirect href="/(tabs)/Home" />;
}

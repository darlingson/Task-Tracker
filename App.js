import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "Darlingson";
  return (
    <View style={{height:100, width:100, backgroundColor: 'orange',}}>
      <Text>Hello World</Text>
      <Text>{name}</Text>
      <Text>Welcome to react native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

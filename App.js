import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "Darlingson";
  return (
    <SafeAreaView>
      <View style={{height:100, width:100, backgroundColor: 'orange',}}>
        <Text>Hello World</Text>
        <Text>{name}</Text>
        <Text>Welcome to react native</Text>
    </View>
    </SafeAreaView>
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

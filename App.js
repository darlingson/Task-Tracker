import { View, StyleSheet, SafeAreaView } from "react-native"
import HomeComponent from "./src/components/HomeComponent"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HomeComponent/>
      </View>
    </SafeAreaView>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  wrapper: {
    flex: 1,
  }
})
export default App
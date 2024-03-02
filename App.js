import { View, StyleSheet, SafeAreaView } from "react-native"
import HomeComponent from "./src/components/HomeComponent"

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HomeComponent/>
      </View>
    </SafeAreaView>
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
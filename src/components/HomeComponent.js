import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeComponent() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Task Tracker</Text>
        <Text style={styles.taskContainer}>Today's Tasks</Text>
        <Text style={styles.taskContainer}>Upcoming Tasks for the week</Text>
        <Text style={styles.taskContainer}>Upcoming Tasks for the month</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22f',
    alignItems: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  taskContainer: {
    color:'black',
    fontSize: 20,
  },
  titleText: {
    fontSize: 48,
    color: '#fff',
  }
});

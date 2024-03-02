import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function HomeComponent({navigation}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Task Tracker</Text>
        <View>
            <Text style={styles.taskContainer}>Today's Tasks</Text>
            <Button title="Weekly Tasks" onPress={() => navigation.navigate('WeeklyTasks')}/>
        </View>
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

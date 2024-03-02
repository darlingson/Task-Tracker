import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Task Tracker</Text>
        <View style={styles.taskSect}>
          <Text style={styles.taskSectItem}>Today's Tasks</Text>
          <Button style={styles.taskSectItem} title=">" onPress={() => navigation.navigate('WeeklyTasks')}/>
        </View>
        <View style={styles.taskSect}>
            <Text style={styles.taskSectItem}>Upcoming Tasks for the week</Text>
            <Button style={styles.taskSectItem} title=">" onPress={() => navigation.navigate('WeeklyTasks')}/>
        </View>
        <View style={styles.taskSect}>
          <Text style={styles.taskSectItem}>Upcoming Tasks for the month</Text>
          <Button style={styles.taskSectItem} title=">" onPress={() => navigation.navigate('MonthlyTasks')}/>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22f',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  taskContainer: {
    color:'black',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  titleText: {
    fontSize: 48,
    color: '#fff',
  },
  taskSect :{
    flexDirection: 'row', // Arrange items horizontally
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'space-between', // Add space between items
    width: '100%',
  },
  taskSectItem :{
    width: '48%', // Set each item's width to take half of the screen
    borderWidth: 1,
    // borderColor: 'gray',
    padding: 10,
    margin: 5,
  }
});

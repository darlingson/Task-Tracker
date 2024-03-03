import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <TouchableOpacity
                style={{ 
                    borderWidth: 1, 
                    borderColor: 'red', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: 70, 
                    position: 'absolute', 
                    top: 390, 
                    right: 20, 
                    height: 70, 
                    backgroundColor: 'red', 
                    borderRadius: 100,
                    marginTop:200
                }} 
                onPress={() => { alert('Button is pressed') }} 
            > 
                <Text style={{ color: "white" }}>+</Text> 
            </TouchableOpacity> 
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
    borderColor: 'black',
    borderWidth: 1,
    marginEnd : 20,
    marginStart : 20,
  },
  taskSectItem :{
    width: '48%', // Set each item's width to take half of the screen
    // borderWidth: 1,
    // borderColor: 'gray',
    padding: 10,
    margin: 5,
  }
});

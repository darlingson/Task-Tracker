import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modal from "react-native-modal";
import { useState } from 'react';
export default function HomeScreen({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(!isModalVisible);
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
            borderColor: 'lightgreen', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: 70, 
            position: 'absolute', 
            top: 390, 
            right: 20, 
            height: 70, 
            backgroundColor: 'lightgreen', 
            borderRadius: 100,
            marginTop:200
            }} 
            onPress={() => {handleModal()}} 
        > 
        <Text style={{ color: "white" }}>+</Text> 
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalStyle}>
            <Text>Hello!</Text>
            <View style={styles.modalButtonRowStyle}>
              <Button title="Cancel" onPress={handleModal} />
              <Button title="Add Task" onPress={handleModal} />
            </View>
          </View>
        </Modal>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1178d8',
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
  },
  modalStyle :{
    flex : 1,
    width: '100%',
    justifyContent:'center',
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'#1178d8'
  },
  modalButtonRowStyle:{
    flexDirection: 'row', // Arrange items horizontally
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'space-between', // Add space between items
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,    
  }
});

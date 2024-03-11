import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modal from "react-native-modal";
import { useState } from 'react';
import {useList} from '../context/ListContext'
import DateTimePicker from 'react-native-modal-datetime-picker';
export default function HomeScreen({navigation}) {
  const {addToList} = useList();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(!isModalVisible);
  const [taskName, onChangeTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskStatus, onChangeTaskStatus] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [taskDate, setTaskDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setTaskDate(date.toISOString()); // Set the selected date in ISO format
    hideDatePicker();
  };

  const handleAddTask = () => {
    if (taskName && taskDate && taskStatus) {
      const newTask = {
        name: taskName,
        date: taskDate,
        status: taskStatus
      };
      addToList(newTask);

      setTaskDate('');
      onChangeTaskName('');
      onChangeTaskStatus('');
    }
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Task Tracker</Text>
        <TouchableHighlight style={styles.taskSect} onPress={() => navigation.navigate('TodaysTasks')}>
        <View>
          <Text style={styles.taskSectItem}>Today's Tasks</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.taskSect} onPress={() => navigation.navigate('WeeklyTasks')}>
        <View>
          <Text style={styles.taskSectItem}>Upcoming Tasks for the week</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.taskSect} onPress={() => navigation.navigate('MonthlyTasks')}>
        <View>
          <Text style={styles.taskSectItem}>Upcoming Tasks for the month</Text>
        </View>
      </TouchableHighlight>
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
            <View style={{alignItems: 'center'}}>
              <Text style={{ fontSize: 40, fontWeight: 'bold'}} >Add Task</Text>
            </View>
            <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeTaskName}
              value={taskName}
              placeholder='Task Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={setTaskDate}
              value={taskDate}
              placeholder="Task Date"
            />
            <Button title="Set Date" onPress={showDatePicker} />
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTaskStatus}
              value={taskStatus}
              placeholder="Task Status"
              keyboardType="default"
            />
            </View>
            <View style={styles.modalButtonRowStyle}>
              <Button title="Cancel" color='red' onPress={handleModal} />
              <Button title="Add Task" color='green' onPress={handleAddTask} />
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

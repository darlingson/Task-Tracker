import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import WeeklyTasksScreen from './src/components/WeeklyTasksScreen';
import MonthlyTasksScreen from './src/components/MontlyTasksScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WeeklyTasks" component={WeeklyTasksScreen} />
        <Stack.Screen name="MonthlyTasks" component={MonthlyTasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import WeeklyTasksScreen from './src/components/WeeklyTasksScreen';
import MonthlyTasksScreen from './src/components/MontlyTasksScreen';
import { ListProvider } from './src/context/ListContext';
import TodaysTaskScreen from './src/components/TodaysTaskScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ListProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TodaysTasks" component={TodaysTaskScreen} />
          <Stack.Screen name="WeeklyTasks" component={WeeklyTasksScreen} />
          <Stack.Screen name="MonthlyTasks" component={MonthlyTasksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListProvider>
  );
}

export default App;
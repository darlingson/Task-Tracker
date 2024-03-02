import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './src/components/HomeComponent';
import WeeklyTasks from './src/components/WeeklyTasks';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="WeeklyTasks" component={WeeklyTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
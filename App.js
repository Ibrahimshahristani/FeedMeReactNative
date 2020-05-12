import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="FeedMe" component={SearchScreen} />
      <Stack.Screen name="FeedMeDetail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

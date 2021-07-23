import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchTabNavigator from './SearchTabNavigator';

const Stack = createStackNavigator();

const ExploreTabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={HomeScreen} />

      <Stack.Screen name="SearchResults" component={SearchTabNavigator} />
    </Stack.Navigator>
  );
};

export default ExploreTabNavigator;

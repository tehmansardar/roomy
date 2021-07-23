import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResutls';

const Stack = createStackNavigator();

const ExploreTabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={HomeScreen} />

      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
    </Stack.Navigator>
  );
};

export default ExploreTabNavigator;

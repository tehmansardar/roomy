import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DestinationScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={HomeTabNavigator} />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationScreen}
        />
        <Stack.Screen name={'Guests'} component={GuestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

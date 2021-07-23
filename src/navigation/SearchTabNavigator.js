import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResutls';
import PagerView from 'react-native-pager-view';

const Tab = createMaterialTopTabNavigator();

const SearchTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'} component={SearchResultsScreen} />
      <Tab.Screen name={'Map'} component={SearchResultsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;

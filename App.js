/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <HomeScreen /> */}
        <Post />
      </View>
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

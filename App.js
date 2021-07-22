/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <HomeScreen /> */}
        <Post post={post2} />
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

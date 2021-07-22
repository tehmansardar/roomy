import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import searchResutls from '../../../assets/data/search';

const DestinationScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        placeholderTextColor="#5b5b5b"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destination */}
      <FlatList
        data={searchResutls}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationScreen;

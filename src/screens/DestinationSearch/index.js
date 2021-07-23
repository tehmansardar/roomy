import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {useNavigation} from '@react-navigation/native';

import SuggestionRows from '../../components/SuggestionRows';

// AIzaSyBelvJjnjNr3A30X5dTVEMmoilV6FH_XP0

const DestinationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input Component */}

      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            navigation.navigate('Guests');
          }}
          query={{
            key: 'AIzaSyDPYjiwIUr-We5AOJGdiwHPZ8t5ht0rOEY',
            language: 'en',
            types: '(cities)',
          }}
          fetchDetails
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
          }}
          textInputProps={{placeholderTextColor: '#5b5b5b'}}
          renderRow={item => <SuggestionRows item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationScreen;

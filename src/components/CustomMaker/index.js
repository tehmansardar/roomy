import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={[
          styles.markerContainer,
          {backgroundColor: isSelected ? '#000' : '#fff'},
        ]}>
        <Text
          style={[styles.markerText, {color: isSelected ? '#fff' : '#000'}]}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
  markerText: {
    fontWeight: 'bold',
  },
});

export default CustomMarker;

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import places from '../../../assets/data/feed';

import CustomMarker from '../../components/CustomMaker';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectPlaceId] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {places.map((place, index) => (
          <CustomMarker
            key={index}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectPlaceId(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
});

export default SearchResultsMap;

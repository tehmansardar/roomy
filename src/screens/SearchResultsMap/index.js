import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import places from '../../../assets/data/feed';

import CustomMarker from '../../components/CustomMaker';

import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectPlaceId] = useState(null);

  const width = useWindowDimensions().width;

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
      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
      </View>
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

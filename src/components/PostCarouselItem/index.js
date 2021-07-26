import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './styles';
const PostCarouselItem = ({post}) => {
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedrooms */}
          <Text style={styles.bedrooms}>
            {post.bed} bed · {post.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.descripton} numberOfLines={2}>
            {post.title}
          </Text>

          {/* Old price & New price */}
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.newPrice}</Text>/ night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;

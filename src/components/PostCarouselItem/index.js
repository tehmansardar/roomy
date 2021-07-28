import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const PostCarouselItem = ({post}) => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
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
    </Pressable>
  );
};

export default PostCarouselItem;

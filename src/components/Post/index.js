import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Post = ({post}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

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
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice}</Text>/ night
      </Text>

      {/* Total */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;

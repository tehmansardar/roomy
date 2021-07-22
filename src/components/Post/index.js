import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Bed & Bedrooms */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & Description */}
      <Text style={styles.descripton} numberOfLines={2}>
        Entire Flat. Puerto de la cruz lrmLorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy
      </Text>

      {/* Old price & New price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $30</Text>/ night
      </Text>

      {/* Total */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;

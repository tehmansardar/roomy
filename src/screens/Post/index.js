import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';

const Post = () => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default Post;

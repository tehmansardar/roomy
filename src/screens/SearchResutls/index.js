import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

import Post from '../../components/Post';
// import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listPosts));
        console.log(res);
        setPosts(res.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;

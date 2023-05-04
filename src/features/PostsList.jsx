import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(`Number of posts: ${posts.length}`);
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

export default PostsList;

const styles = StyleSheet.create({});

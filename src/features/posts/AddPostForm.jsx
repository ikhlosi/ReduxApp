import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSclice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onAddNewPost = () => {
    console.log(
      postAdded({
        id: nanoid(),
        title,
        content,
      })
    );
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <View>
      <TextInput onChangeText={setTitle} value={title} style={styles.input} />
      <TextInput
        onChangeText={setContent}
        value={content}
        style={styles.input}
      />
      <Button title="Add new post" onPress={onAddNewPost} />
    </View>
  );
};

export default AddPostForm;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import PostsList from "./src/features/PostsList";
import store from "./src/store";
import AddPostForm from "./src/features/posts/AddPostForm";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Posts:</Text>
        <PostsList />
        <AddPostForm />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

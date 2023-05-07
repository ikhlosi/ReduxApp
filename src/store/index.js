import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSclice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// Wrap the rootReducer with the persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Install the persistReducer instead of the rootReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };

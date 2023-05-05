import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text..." },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    }, // Without curly braces, this gave the following error: `Error: [Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft., js engine: hermes`. Reason: the `return` is implied without curly braces.
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;

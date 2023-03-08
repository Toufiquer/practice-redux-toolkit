import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: false,
};

const selectedTagsSlice = createSlice({
  name: "tagsSelected",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      const index = state.tags.indexOf(action.payload);
      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
  },
});
export default selectedTagsSlice.reducer;
export const { addTag, removeTag } = selectedTagsSlice.actions;

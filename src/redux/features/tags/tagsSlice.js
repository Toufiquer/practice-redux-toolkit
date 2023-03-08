import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { tagsAPI } from "./tagsAPI";
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  //   const fetchData = await fetch("http://localhost:9000/tags");
  //   const data = await fetchData.json();

  const data = await tagsAPI();
  return data;
});

const tagsSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.tags = [];
      });
  },
});
export default tagsSlice.reducer;

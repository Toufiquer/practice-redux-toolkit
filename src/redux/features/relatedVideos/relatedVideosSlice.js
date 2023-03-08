import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { relatedVideosApi } from "./relatedVideosApi";
const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchVideos",
  async ({ id, tags }) => {
    const data = await relatedVideosApi({ id, tags });
    return data;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.relatedVideos = [];
      });
  },
});
export default relatedVideosSlice.reducer;

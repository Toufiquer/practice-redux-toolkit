import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { videosAPI } from "./videosAPI";
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, searchText }) => {
    const data = await videosAPI({ tags, searchText });
    return data;
  }
);

const videosSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.videos = [];
      });
  },
});
export default videosSlice.reducer;

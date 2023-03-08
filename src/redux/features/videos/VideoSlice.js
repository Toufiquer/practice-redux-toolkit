import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "../../api/getVideos";
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  //   const fetchData = await fetch("http://localhost:9000/videos");
  //   const data = await fetchData.json();

  const data = await getVideos();
  return data;
});

const videoSlice = createSlice({
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
export default videoSlice.reducer;

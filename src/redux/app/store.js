import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";
const logger = createLogger();

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    video: videoSlice,
    tags: tagsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

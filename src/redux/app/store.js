import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import VideoSlice from "../features/videos/VideoSlice";
const logger = createLogger();

export const store = configureStore({
  reducer: { videos: VideoSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

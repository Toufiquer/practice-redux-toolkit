import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/videos/videoSlice";
const logger = createLogger();

export const store = configureStore({
  reducer: { videos: videoSlice, tag: tagsSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

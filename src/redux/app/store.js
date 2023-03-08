import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import relatedVideos from "../features/relatedVideos/relatedVideosSlice";
import searchSlice from "../features/search/searchSlice";
import tagsSlice from "../features/tags/tagsSlice";
import selectedTagsSlice from "../features/tagsSelected/selectedTagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";
const logger = createLogger();

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    video: videoSlice,
    relatedVideos: relatedVideos,
    tags: tagsSlice,
    selectedTags: selectedTagsSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

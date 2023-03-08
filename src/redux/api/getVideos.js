import { instance } from "./instanse";

export const getVideos = async () => {
  const fetchData = await instance("/videos");
  return fetchData.data;
};

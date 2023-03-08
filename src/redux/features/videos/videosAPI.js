import { instance } from "../../api/instance";

export const videosAPI = async () => {
  const fetchData = await instance("/videos");
  return fetchData.data;
};

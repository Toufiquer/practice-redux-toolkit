import { instance } from "../../api/instance";

export const videoAPI = async (id) => {
  const fetchData = await instance(`/videos/${id}`);
  return fetchData.data;
};

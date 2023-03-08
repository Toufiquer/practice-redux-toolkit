import { instance } from "../../api/instance";

export const tagsAPI = async () => {
  const fetchData = await instance("/tags");
  return fetchData.data;
};

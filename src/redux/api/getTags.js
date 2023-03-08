import { instance } from "./instanse";

export const getTags = async () => {
  const fetchData = await instance("/tags");
  return fetchData.data;
};

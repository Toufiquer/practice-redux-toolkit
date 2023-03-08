import { instance } from "../../api/instance";
// ?title_like=vs &_limit=5 id_ne=1
export const relatedVideosApi = async ({ id, tags }) => {
  const tagsString = tags.map((tag) => "tags_like=" + tag).join("&");
  const fetchData = await instance(
    `/videos/?${tagsString}&id_ne=${id}&_limit=5`
  );
  return fetchData.data;
};

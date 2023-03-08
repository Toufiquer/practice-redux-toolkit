import { instance } from "../../api/instance";

export const videosAPI = async ({ tags, searchText }) => {
  let search = ``;
  if (tags.length > 0) {
    search += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searchText !== "") {
    search += `&q=${searchText}`;
  }
  console.log(search, " => Line No: 11");
  const fetchData = await instance(`/videos/?${search}`);
  return fetchData.data;
};

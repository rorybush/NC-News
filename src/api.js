import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://news-api-izsx.onrender.com/api/",
});

export const fetchArticleList = () => {
  return fromApi.get(`/articles/`).then((res) => {
    return res.data;
  });
};

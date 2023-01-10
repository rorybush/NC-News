import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://news-api-izsx.onrender.com/api/",
});

export const fetchArticleList = () => {
  return fromApi.get(`/articles/`).then((res) => {
    return res.data;
  });
};

export const fetchArticleById = (article_id) => {
  return fromApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const fetchCommentList = (article_id) => {
  return fromApi.get(`/articles/${article_id}/comments/`).then((res) => {
    return res.data;
  });
};

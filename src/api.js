import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://news-api-izsx.onrender.com/api/",
});

export const fetchArticleList = () => {
  return fromApi.get(`/articles/`).then(({ data }) => {
    return data;
  });
};

export const fetchArticleById = (article_id) => {
  return fromApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const fetchCommentList = (article_id) => {
  return fromApi.get(`/articles/${article_id}/comments/`).then(({ data }) => {
    return data;
  });
};

export const updateArticleVotes = (article_id, vote) => {
  return fromApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((data) => {});
};

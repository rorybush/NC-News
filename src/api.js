import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://news-api-izsx.onrender.com/api/",
});

export const fetchArticleList = (topic) => {
  return fromApi.get(`/articles/`, { params: { topic } }).then(({ data }) => {
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

export const patchArticleVotes = (article_id, vote) => {
  return fromApi.patch(`/articles/${article_id}`, { inc_votes: vote });
};

export const postComment = (article_id, username, body) => {
  return fromApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const fetchUsers = () => {
  return fromApi.get(`/users/`).then(({ data }) => {
    return data.users;
  });
};

export const fetchTopics = () => {
  return fromApi.get(`/topics/`).then(({ data }) => {
    return data;
  });
};

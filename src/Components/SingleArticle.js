import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

function SingleArticle() {
  const { article_id } = useParams();

  const [SingleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    api.fetchArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, [article_id]);

  return (
    <div className="single--article">
      <h2>{SingleArticle.title}</h2>
      <div className="single--article--information">
        <p>Author: {SingleArticle.author}</p>
        <p>Topic: {SingleArticle.topic}</p>
        <p>Published: {SingleArticle.created_at}</p>
        <p>Article Votes: {SingleArticle.votes}</p>
        <p>Comment Count: {SingleArticle.comment_count}</p>
      </div>
      <p className="article--body">{SingleArticle.body}</p>
      <CommentsList />
    </div>
  );
}

export default SingleArticle;

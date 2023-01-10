import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

function SingleArticle() {
  const { article_id } = useParams();

  const [SingleArticle, setSingleArticle] = useState({});
  const [Vote, setVote] = useState(0);
  const [VoteError, setVoteError] = useState(null);

  useEffect(() => {
    api.fetchArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, [article_id, Vote]);

  const handleArticleUpVote = () => {
    api
      .incArticleVotes(article_id)
      .then(() => {
        setVote((currVote) => currVote + 1);
      })
      .catch((err) => {
        setVoteError(err.message);
      });
  };

  const handleArticleDownVote = () => {
    api
      .decArticleVotes(article_id)
      .then(() => {
        setVote((currVote) => currVote - 1);
      })
      .catch((err) => {
        setVoteError(err.message);
      });
  };

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
      <p>{VoteError}</p>
      <button onClick={handleArticleUpVote}>Upvote</button>
      <button onClick={handleArticleDownVote}>Downvote</button>
      <p className="article--body">{SingleArticle.body}</p>
      <CommentsList />
    </div>
  );
}

export default SingleArticle;

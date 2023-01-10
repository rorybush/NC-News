import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

function SingleArticle() {
  const { article_id } = useParams();

  const [SingleArticle, setSingleArticle] = useState({});
  const [Vote, setVote] = useState({ inc_votes: 0 });
  const [VoteError, setVoteError] = useState(null);

  useEffect(() => {
    api.fetchArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
      setVote({ inc_votes: article.votes });
    });
  }, [article_id]);

  const handleVotes = (article_id, vote) => {
    setVote((currVote) => {
      return {
        inc_votes: currVote.inc_votes + vote,
      };
    });

    api.patchArticleVotes(article_id, vote).catch((err) => {
      setVoteError(err.message);
    });
  };

  return (
    <div className="single--article">
      <h2>{SingleArticle.title}</h2>
      <div className="single--article--information">
        <p>By {SingleArticle.author}</p>
        <p>Topic: {SingleArticle.topic}</p>
        <p>Published: {SingleArticle.created_at}</p>
        <p>{Vote.inc_votes} Votes</p>
        <p>{SingleArticle.comment_count} Comments</p>
      </div>
      <p>{VoteError}</p>
      <button onClick={() => handleVotes(article_id, 1)}>Upvote</button>
      <button onClick={() => handleVotes(article_id, -1)}>Downvote</button>
      <p className="article--body">{SingleArticle.body}</p>
      <CommentsList />
    </div>
  );
}

export default SingleArticle;

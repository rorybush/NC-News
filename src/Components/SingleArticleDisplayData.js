import React from "react";

function SingleArticleDisplayData({
  SingleArticle,
  VoteError,
  Vote,
  handleVotes,
  article_id,
}) {
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
    </div>
  );
}

export default SingleArticleDisplayData;

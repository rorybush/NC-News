import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import SingleArticleDisplayData from "./SingleArticleDisplayData";

function SingleArticle() {
  const { article_id } = useParams();

  const [SingleArticle, setSingleArticle] = useState({});
  const [Vote, setVote] = useState({ inc_votes: 0 });
  const [VoteError, setVoteError] = useState(null);
  const [SingleArticleIsLoading, setSingleArticleIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
      setVote({ inc_votes: article.votes });
      setSingleArticleIsLoading(false);
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
    <div>
      {SingleArticleIsLoading ? (
        "Loading Article..."
      ) : (
        <SingleArticleDisplayData
          article_id={article_id}
          SingleArticle={SingleArticle}
          Vote={Vote}
          VoteError={VoteError}
          handleVotes={handleVotes}
        />
      )}

      <CommentsList />
    </div>
  );
}

export default SingleArticle;

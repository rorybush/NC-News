//SingleTopic.js

import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleTopic() {
  const { topic_slug } = useParams();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [TopicIsLoading, setTopicIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticleList().then(({ articles }) => {
      setFilteredArticles(
        articles.filter((article) => article.topic === topic_slug)
      );
    });
    setTopicIsLoading(false);
  }, [topic_slug]);

  return (
    <div>
      <h2>{topic_slug}</h2>

      {TopicIsLoading ? (
        "Loading..."
      ) : (
        <div>
          {filteredArticles.map((article, i) => {
            return (
              <ul key={i}>
                <li key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title}</h3>
                  </Link>
                  <p>By {article.author}</p>
                  <p>Published: {article.created_at}</p>
                  <p>{article.inc_votes} Votes</p>
                  <p>{article.comment_count} Comments</p>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SingleTopic;

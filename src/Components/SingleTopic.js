//SingleTopic.js

import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function SingleTopic() {
  const { topic_slug } = useParams();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [TopicIsLoading, setTopicIsLoading] = useState(true);
  useEffect(() => {
    api.fetchArticleList(topic_slug).then(({ articles }) => {
      setFilteredArticles(articles);
      setTopicIsLoading(false);
    });
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
                <li key={article.article_id} className="topic--block">
                  <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title}</h3>
                  </Link>
                  <p>By {article.author}</p>
                  <p>Published {dayjs(article.created_at).fromNow()}</p>
                  <p>{article.votes} Votes</p>
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

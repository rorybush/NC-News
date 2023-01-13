import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function ArticleListMap({ ArticleList }) {
  return (
    <ul>
      {ArticleList.map((article) => {
        return (
          <li key={article.article_id} className="article--block">
            <Link to={`${article.article_id}`}>
              <h3>{article.title}</h3>
            </Link>
            <div className="article--information">
              <p>By {article.author}</p>
              <p>
                Published {"  "}
                {dayjs(article.created_at).fromNow()}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleListMap;

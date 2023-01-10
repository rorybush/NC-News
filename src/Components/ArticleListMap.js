import React from "react";
import { Link } from "react-router-dom";

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
              <p>{article.author}</p>
              <p>{article.created_at}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleListMap;

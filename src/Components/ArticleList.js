import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
  const [ArticleList, setArticleList] = useState([]);

  useEffect(() => {
    api.fetchArticleList().then(({ articles }) => {
      setArticleList(articles);
    });
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default ArticleList;

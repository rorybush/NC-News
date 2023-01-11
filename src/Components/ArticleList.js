import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import ArticleListMap from "./ArticleListMap";

function ArticleList() {
  const [ArticleList, setArticleList] = useState([]);
  const [ArticlesIsLoading, setArticlesIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticleList().then(({ articles }) => {
      setArticleList(articles);
      setArticlesIsLoading(false);
    });
  }, []);

  return (
    <div>
      {!ArticlesIsLoading && ArticleList.length === 0 && <p>No Articles.</p>}
      {ArticlesIsLoading ? (
        "Loading Articles..."
      ) : (
        <ArticleListMap ArticleList={ArticleList} />
      )}
    </div>
  );
}

export default ArticleList;

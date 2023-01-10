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
      {ArticleList.length === 0 && <p>No Articles.</p>}
      {ArticlesIsLoading ? (
        "Loading..."
      ) : (
        <ArticleListMap ArticleList={ArticleList} />
      )}

    </div>
  );
}

export default ArticleList;

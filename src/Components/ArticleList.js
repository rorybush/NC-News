import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import ArticleListMap from "./ArticleListMap";

function ArticleList() {
  const [ArticleList, setArticleList] = useState([]);
  const [ArticlesIsLoading, setArticlesIsLoading] = useState(true);
  const [SortBy, setSortBy] = useState("");

  useEffect(() => {
    api.fetchArticleList(null, SortBy).then(({ articles }) => {
      setArticleList(articles);
      setArticlesIsLoading(false);
    });
  }, [SortBy]);

  const handleSortBy = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSortBy}>
        <option value="?sort_by=created_at&order=DESC">Sort by: Newest</option>
        <option value="?sort_by=created_at&order=ASC">Oldest</option>
        <option value="?sort_by=votes&order=DESC">Most Liked</option>
        <option value="?sort_by=votes&order=ASC">Most Disliked</option>
        <option value="?sort_by=comment_count&order=DESC">Most Comments</option>
        <option value="?sort_by=comment_count&order=ASC">Least Comments</option>
        <option value="?sort_by=title&order=ASC">Title Ascending</option>
        <option value="?sort_by=title&order=DESC">Title Descending</option>
      </select>

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

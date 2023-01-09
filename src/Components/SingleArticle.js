import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleArticle() {
  const { article_id } = useParams();

  const [SingleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    api.fetchArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, [article_id]);
  return <div>SingleArticle</div>;
}

export default SingleArticle;

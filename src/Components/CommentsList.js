import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentListMap from "./CommentListMap";

function CommentsList() {
  const [CommentList, setCommentList] = useState([]);
  const [CommentsIsLoading, setCommentsIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    api.fetchCommentList(article_id).then(({ comments }) => {
      setCommentList(comments[1]);
      setCommentsIsLoading(false);
    });
  }, [article_id]);
  return (
    <div>
      <h3>Comments:</h3>

      {CommentList.length === 0 && <p>No Comments.</p>}
      {CommentsIsLoading ? (
        "Loading..."
      ) : (
        <CommentListMap CommentList={CommentList} />
      )}
    </div>
  );
}

export default CommentsList;

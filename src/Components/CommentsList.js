import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentListMap from "./CommentListMap";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

function CommentsList() {
  const [CommentList, setCommentList] = useState([]);
  const [CommentsIsLoading, setCommentsIsLoading] = useState(true);
  const [DeleteCommentId, setDeleteCommentId] = useState(0);
  const [DelCommError, setDelCommError] = useState("");
  const [IsCommentDeleted, setIsCommentDeleted] = useState(false);

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
      <p>{DelCommError}</p>
      {IsCommentDeleted && <p>Comment Deleted</p>}
      <AddComment setCommentList={setCommentList} />
      <DeleteComment
        DeleteCommentId={DeleteCommentId}
        setCommentList={setCommentList}
        setIsCommentDeleted={setIsCommentDeleted}
        setDelCommError={setDelCommError}
      />
      {!CommentsIsLoading && CommentList.length === 0 && <p>No Comments.</p>}
      {CommentsIsLoading ? (
        "Loading Comments..."
      ) : (
        <CommentListMap
          CommentList={CommentList}
          setDeleteCommentId={setDeleteCommentId}
        />
      )}
    </div>
  );
}

export default CommentsList;

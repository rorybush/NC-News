import React from "react";
import { useEffect } from "react";
import * as api from "../api";

function DeleteComment({
  DeleteCommentId,
  setCommentList,
  setIsCommentDeleted,
  setDelCommError,
}) {
  useEffect(() => {
    setCommentList((currComments) => {
      const updatedComments = [...currComments];
      return updatedComments.filter((comment) => {
        return comment.comment_id !== DeleteCommentId;
      });
    });
    if (DeleteCommentId > 0) {
      api
        .deleteComment(DeleteCommentId)
        .then(() => {
          setIsCommentDeleted(true);
        })
        .catch((err) => {
          setDelCommError(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DeleteCommentId]);

  return <div></div>;
}

export default DeleteComment;

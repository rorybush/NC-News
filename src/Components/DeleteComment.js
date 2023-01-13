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
    if (DeleteCommentId > 0) {
      api
        .deleteComment(DeleteCommentId)
        .then(() => {
          setCommentList((currComments) => {
            const updatedComments = [...currComments];
            return updatedComments.filter((comment) => {
              return comment.comment_id !== DeleteCommentId;
            });
          });
          setIsCommentDeleted(true);
        })
        .catch((err) => {
          setDelCommError(err.message);
        });
    }
  }, [DeleteCommentId]);

  return <div></div>;
}

export default DeleteComment;

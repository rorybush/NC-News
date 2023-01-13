import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";

function CommentListMap({ CommentList, handleDelete, setDeleteCommentId }) {
  const { User } = useContext(UserContext);

  return (
    <ul className="comment--list">
      {CommentList.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment--block">
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>Published: {comment.created_at}</p>
            <p>Votes: {comment.votes} </p>
            {User.username === comment.author && (
              <button
                onClick={() => {
                  setDeleteCommentId(comment.comment_id);
                }}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentListMap;

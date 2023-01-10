import React from "react";

function CommentListMap({ CommentList }) {
  return (
    <ul>
      {CommentList.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment--block">
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>Published: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentListMap;

import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentsList() {
  const [CommentList, setCommentList] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    api.fetchCommentList(article_id).then(({ comments }) => {
      setCommentList(comments[1]);
    });
  }, []);

  return (
    <div>
      <h3>Comments:</h3>
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
    </div>
  );
}

export default CommentsList;

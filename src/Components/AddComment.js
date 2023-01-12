import React from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../App";

function AddComment({ setCommentList }) {
  const { article_id } = useParams();
  const { User } = useContext(UserContext);

  const [CommentBody, setCommentBody] = useState("");
  const [CommentIsPosted, setCommentIsPosted] = useState(false);
  const [AddCommentError, setAddCommentError] = useState(null);
  const [CommentSent, setCommentSent] = useState(false);

  const AddNewComment = (e) => {
    e.preventDefault();
    const newComment = {
      comment_id: Date.now(),
      votes: 0,
      created_at: "Just posted",
      author: User.username,
      body: CommentBody,
    };
    setCommentSent(true);

    setCommentList((currComments) => {
      return [...currComments, newComment];
    });
    api
      .postComment(article_id, User.username, CommentBody)
      .then(() => {
        setCommentBody("");
        setCommentIsPosted(true);
        setCommentSent(false);
      })
      .catch((err) => {
        setAddCommentError(err.message);
      });
  };

  const handleChange = (e) => {
    setCommentBody(e.target.value);
    setCommentIsPosted(false);
  };

  return (
    <div>
      <form onSubmit={AddNewComment}>
        <p>{AddCommentError}</p>
        <label>
          Add a new Comment:{"  "}
          <textarea type="text" value={CommentBody} onChange={handleChange} />
        </label>
        <button type="submit" disabled={CommentSent}>
          Add Comment
        </button>
      </form>
      {!AddCommentError && CommentIsPosted && <p>Comment Sent</p>}
    </div>
  );
}

export default AddComment;

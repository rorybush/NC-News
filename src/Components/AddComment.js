import React from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../App";

function AddComment() {
  const { article_id } = useParams();
  const { User } = useContext(UserContext);

  const [CommentBody, setCommentBody] = useState("");
  const [CommentIsPosted, setCommentIsPosted] = useState(false);
  const [AddCommentError, setAddCommentError] = useState(null);

  const AddNewComment = (e) => {
    e.preventDefault();
    api
      .postComment(article_id, User.username, CommentBody)
      .then(() => {
        setCommentBody("");
        setCommentIsPosted(true);
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
        <button type="submit" disabled={!CommentBody}>
          Add Comment
        </button>
      </form>
      {!AddCommentError && CommentIsPosted && <p>Comment Sent</p>}
    </div>
  );
}

export default AddComment;

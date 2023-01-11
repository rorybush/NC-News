import React from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState } from "react";

function AddComment() {
  const { article_id } = useParams();
  const [CommentBody, setCommentBody] = useState("");
  const [CommentIsPosted, setCommentIsPosted] = useState(false);

  const AddNewComment = (e) => {
    e.preventDefault();
    api.postComment(article_id, "grumpy19", CommentBody);
    setCommentIsPosted(true);
  };

  const handleChange = (e) => {
    setCommentBody(e.target.value);
    setCommentIsPosted(false);
  };

  return (
    <div>
      <form onSubmit={AddNewComment}>
        <label>
          Add a new Comment:{"  "}
          <input type="text" value={CommentBody} onChange={handleChange} />
        </label>
        <button type="submit" disabled={!CommentBody}>
          Add Comment
        </button>
      </form>
      {CommentIsPosted && <p>Comment Sent</p>}
    </div>
  );
}

export default AddComment;

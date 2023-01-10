import React from "react";

function CommentsList() {
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

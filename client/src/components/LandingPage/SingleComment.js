import React, { useEffect, useState } from "react";

import Comment from "./Comment";
function SingleComment({ refreshFunction, comment, id, history }) {
  console.log("SIngle Comment");
  const [isReply, setIsReply] = useState(null);
  const {
    content,
    writer: { profileImage, handle },
    createdAt,
    _id: commentId,
  } = comment;
  useEffect(() => {
    let mounted = true;
    if (mounted && comment.responseTo) {
      setIsReply(true);
    } else {
      setIsReply(false);
    }
    return () => (mounted = false);
  }, [comment.responseTo]);
  return (
    <div>
      {isReply !== null && (
        <Comment
          id={id}
          createdAt={createdAt}
          author={handle}
          userImage={profileImage}
          content={content}
          commentId={commentId}
          refreshFunction={refreshFunction}
          isReply={isReply}
          history={history}
        />
      )}
    </div>
  );
}

export default React.memo(SingleComment);

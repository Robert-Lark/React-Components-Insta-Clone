// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);

  const incrementComments = () => {
    setComments(props.comments.username);
  }
  return (
    <div>
      {comments.map(c => (
      <CommentInput key={c.username} comments={c}/>))}
    </div>
  );
};

export default CommentSection;

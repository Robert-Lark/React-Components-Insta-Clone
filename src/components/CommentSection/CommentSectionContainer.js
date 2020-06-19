// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.propsPassedFromParent.comments);

  return (
    <div>
      {comments.map(c => (
      <CommentInput key={c.comments} propsPassedFromParent ={c}/>))}
    </div>
  );
};

export default CommentSection;

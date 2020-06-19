
//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import dummyData from "../../dummy-data.js";
import "./Posts.css";


// import data 

const PostsPage = () => {
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
{data.map(p => (
  <Post key={p.id} post={p} />
))}
    </div>
  );
};

export default PostsPage;


//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import dummyData from "../../dummy-data.js";
import "./Posts.css";


// import data 

const PostsPage = () => {
  const [data, setData] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
{data.map(p => (
  <Post key={p.id} propsPassedFromParent={p} />
))}
    </div>
  );
};

export default PostsPage;

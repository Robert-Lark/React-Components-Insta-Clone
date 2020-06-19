/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import "./components/PostsContainer/PostsPage.js";
import "./components/SearchBar/SearchBarContainer.js";
import PostsPage from "./components/PostsContainer/PostsPage.js";

const App = () => {
console.log(App)
  return (
    <div className="App">
     <PostsPage />
    </div>
  );
};

export default App;

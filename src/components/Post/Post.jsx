import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  console.log(post);
  const { id, title } = post;
  return (
    <div className="post-container">
      <p>No: {id}</p>
      <h4>Title: {title}</h4>
      <button className="post-btn">
        <Link to={`/post/${id}`}>Show Details</Link>
      </button>
    </div>
  );
};

export default Post;

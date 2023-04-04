import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div>
      <h2>Here is Post Details</h2>
      <p>{post.body} </p>
    </div>
  );
};

export default PostDetails;

import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <div>Details</div>
      <h4>Name: {friend.name}</h4>
      <p>Phone: {friend.phone}</p>
    </div>
  );
};

export default FriendDetail;

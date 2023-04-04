import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const friends = useLoaderData();
  console.log(friends);
  return (
    <div>
      <h1>Here is {friends.length} Friends </h1>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;

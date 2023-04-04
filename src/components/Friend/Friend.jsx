import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  //   console.log(friend);
  const { id, name, email, phone, username } = friend;
  return (
    <div className="friends-container">
      <h2>
        Name: {name} <span>({username})</span>
      </h2>
      <p>Email: {email}</p>
      <p> Phone: {phone} </p>
      <button className="friend-btn">
        <Link to={`/friend/${id}`}>Show Details</Link>
      </button>
    </div>
  );
};

export default Friend;

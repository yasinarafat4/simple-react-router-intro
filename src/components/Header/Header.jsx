import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <ul className="ul-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          {" "}
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

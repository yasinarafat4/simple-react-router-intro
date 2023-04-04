import React from "react";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="nav-container">
      <ul className="ul-container">
        <li>
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/friends">Friends</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/posts">Posts</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/about">About</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <p>Common header</p>
    </div>
  );
};

export default Header;

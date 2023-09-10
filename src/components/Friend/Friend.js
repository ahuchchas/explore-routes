import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  return (
    <div className="friend">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>
          User name: <Link to={`/friends/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default Friend;

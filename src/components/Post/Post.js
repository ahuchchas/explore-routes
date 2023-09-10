import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/posts/${id}`);
  }
  return (
    <div className="post">
      <h4>{title}</h4>
      <Link to={`/posts/${id}`}>See details</Link>
      <Link to={`/posts/${id}`}>
        <button>See details</button>
      </Link>
      <button onClick={handleNavigate}>See details</button>
    </div>
  );
};

export default Post;

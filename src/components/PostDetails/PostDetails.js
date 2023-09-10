import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetail = useLoaderData();
  //   console.log(postDetail);
  const { title, body, id, userId } = postDetail;
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/friends/${userId}`);
  }
  return (
    <div>
      <h2>POST DETAILS of: {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={handleNavigate}>Get the author</button>
    </div>
  );
};

export default PostDetails;

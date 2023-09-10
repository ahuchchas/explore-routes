import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friendDetail = useLoaderData();
  const { username, name, phone } = friendDetail;
  return (
    <div>
      <h2>Details of {username}</h2>
      <h1>Name: {name}</h1>
      <h3>Phone: {phone}</h3>
    </div>
  );
};

export default FriendDetails;

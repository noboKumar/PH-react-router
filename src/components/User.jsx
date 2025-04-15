import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  return (
    <div className="border-2 rounded-xl p-8 space-y-2">
      <h1 className="text-2xl">Name: {user.username}</h1>
      <p className="text-xl">Email: {user.email}</p>
      <Link className="btn" to={`/users/${user.id}`}>
        Show Details
      </Link>
    </div>
  );
};

export default User;

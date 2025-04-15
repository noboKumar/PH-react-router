import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const userData = useLoaderData();
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold">Total Users: {userData.length}</h1>
      <div className="grid grid-cols-4 gap-5">
        {userData.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;

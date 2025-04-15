import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const userData = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl font-bold">Total Users: {userData.length}</h1>
    </div>
  );
};

export default Users;

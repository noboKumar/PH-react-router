import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, phone, website } = userDetails;
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">User Details here: </h1>
      <div className="border-2 p-8 space-y-2 rounded-xl">
        <h1 className="text-2xl font-bold">User fullname: {name}</h1>
        <p className="text-xl">Phone number: {phone}</p>
        <p className="text-xl">website: {website}</p>
      </div>
    </div>
  );
};

export default UserDetails;

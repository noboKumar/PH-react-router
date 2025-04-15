import React, { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import UserInfo from "./UserInfo";

const User = ({ user }) => {
  const [info, setInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);

  const userInfoPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  ).then((res) => res.json());

  
  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="border-2 rounded-xl p-8 space-y-2">
      <h1 className="text-2xl">Name: {user.username}</h1>
      <p className="text-xl">Email: {user.email}</p>
      <Link className="btn" to={`/users/${user.id}`}>
        Show Details
      </Link>
      <button onClick={() => setInfo(!info)} className="mx-5">
        {info ? "hide" : "show"} info
      </button>
      {info && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserInfo userInfoPromise={userInfoPromise}></UserInfo>
        </Suspense>
      )}
      <button onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;

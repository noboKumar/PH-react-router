import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const postData = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold">Posts section</h1>
      <div className="grid grid-cols-5 gap-5">
        {postData.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;

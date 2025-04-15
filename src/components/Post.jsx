import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  return (
    <div className="border-2 p-5 rounded-xl space-y-5">
      <h1 className="text-xl">Post: {post.title}</h1>
      <Link className="btn" to={`/posts/${post.id}`}>
        Show Post
      </Link>
    </div>
  );
};

export default Post;

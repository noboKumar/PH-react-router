import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="border-2 p-5 rounded-xl space-y-5">
      <h1 className="text-xl">Post: {post.title}</h1>
      <Link className="btn" to={`/posts/${post.id}`}>
        Show Post
      </Link> <br/>
      <button onClick={handleNavigate} className="btn">
        show details of -{post.id}
      </button>
    </div>
  );
};

export default Post;

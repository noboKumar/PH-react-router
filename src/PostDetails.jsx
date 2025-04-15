import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const { title, body } = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Post details :</h1>
      <div className="border-2 p-8 space-y-5 rounded-xl w-96">
        <h1 className="text-xl font-bold">
          <span className="underline">Title:</span> {title}.
        </h1>
        <p className="text-xl">{body}</p>
        <button onClick={() => navigate(-1)} className="btn">
          Back
        </button>
      </div>
    </div>
  );
};

export default PostDetails;

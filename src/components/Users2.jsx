import React, { use } from "react";

const Users2 = ({ userData }) => {
  const users = use(userData);
  return (
    <div>
      <h1 className="text-2xl">user-2 length : {users.length}</h1>
    </div>
  );
};

export default Users2;

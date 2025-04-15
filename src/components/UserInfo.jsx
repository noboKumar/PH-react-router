import React, { use } from "react";

const UserInfo = ({ userInfoPromise }) => {
  const userInfoData = use(userInfoPromise);
  const { username, phone, website } = userInfoData;
  return (
    <div>
      <h1 className="text-xl">user info :</h1>
      <h1>{username}</h1>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserInfo;

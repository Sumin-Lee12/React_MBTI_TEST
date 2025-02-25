import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-screen py-11 flex flex-col items-center">
      <div className="bg-blue-100 min-h-[500px] min-w-[500px] p-5 rounded-xl flex justify-around items-center flex-col">
        <h1 className="font-black text-3xl">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>{setNickname}</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

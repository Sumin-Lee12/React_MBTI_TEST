import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { userLogin, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import useUsersStore from "../zustand/useUsersStore";

const Login = () => {
  const navigate = useNavigate();
  const setUser = useUsersStore().setUsers;

  const handleLogin = async (userInfo) => {
    try {
      const data = await userLogin(userInfo);
      console.log(data);
      navigate("/");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      console.log("this is error appeared during login process ==> ", error);
    }
  };

  return (
    <div className="w-full min-h-screen py-11 flex flex-col items-center">
      <div className="bg-blue-100 min-h-[500px] min-w-[500px] p-5 rounded-xl flex justify-around items-center flex-col">
        <h1 className="font-black text-3xl">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-red">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

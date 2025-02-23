import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { userLogin, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import useUsersStore from "../zustand/useUsersStore";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const { userLogin } = useUsersStore((state) => state);

  const handleLogin = async (userInfo) => {
    try {
      await userLogin(userInfo);
      navigate("/");
    } catch {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm
          mode="login"
          onSubmit={handleLogin}
        />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

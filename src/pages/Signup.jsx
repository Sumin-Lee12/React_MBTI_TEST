import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import useUsersStore from "../zustand/useUsersStore";

const Signup = () => {
  const navigate = useNavigate();
  const {createUser } = useUsersStore((state) => state);


  // 완성된 로직들이 아니에요! 참고만 하세요!
  const handleSignup = async (userInfo) => {
    try {
      await createUser(userInfo);
      navigate("/login");
      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.log("회원가입 도중 오류 발생 ==> ", error);
    }
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen py-11 flex flex-col items-center">
      <h1 className="font-black text-5xl mb-7">
        무료 성격 테스트
      </h1>
      <p className="text-xl mb-11">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link to={"/testpage"}>
        MBTI 테스트
      </Link>
    </div>
  );
};

export default Home;

// <div className="w-full min-h-screen py-10">
// <div className="max-w-4xl mx-auto px-4">
// <div className="text-center mb-10">
// <h1 className="text-2xl font-bold text-gray-900">
// 무료 성격 테스트
// </h1>
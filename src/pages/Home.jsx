import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const advertisingBoxes = [
    {title: "성격 유형 검사", text: "자신의 성격 유형을 파악하고 삶의 여러 영억에서 어떤 영향을 미치는지 알아보세요."},
    {title: "성격 유형 이해", text: "다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다."},
    {title: "팀 평가", text: "팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요."},
  ]

  return (
    <div className="w-full min-h-screen py-11 flex flex-col items-center">
      <h1 className="font-black text-4xl mb-5 text-orange-500">무료 성격 테스트</h1>
      <p className="text-base mb-24">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
  
      {/* 부모 div에 min-w-full 또는 flex-wrap 추가 */}
      <div className="flex flex-row justify-center gap-16 min-w-full flex-wrap pb-24">
        {advertisingBoxes.map((box) => (
          <div
            key={box.title}
            className="bg-blue-100 min-h-[200px] max-w-[400px] p-10 rounded-xl flex justify-center items-center flex-col"
          >
            <h1 className="font-black text-3xl pb-5">{box.title}</h1>
            <p>{box.text}</p>
          </div>
        ))}
      </div>
  
      <Link to={"/testpage"} className="bg-orange-500 px-6 py-3 rounded-full text-white font-">지금 테스트 받으러 가기</Link>
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
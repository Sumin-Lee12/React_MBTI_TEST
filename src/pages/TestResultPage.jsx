import React, { useState } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResult = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full h-full overflow-y-auto">
        <h1 className="text-3xl font-bold text-primary-color mb-6">MBTI 설명</h1>
        {Object.entries(mbtiDescriptions).map(([mbti, description]) => (
          <div key={mbti} className="bg-blue-100 p-4 mb-10 rounded-lg">
            <h2 className="text-xl font-bold mb-5">{mbti}</h2>
            <p >{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult;



{/* <div className="w-full flex flex-col items-center justify-center bg-white">
<div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
    <>
      <h1 className="text-3xl font-bold text-primary-color mb-6">
        테스트 결과: {result}
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        {mbtiDescriptions[result] ||
          "해당 성격 유형에 대한 설명이 없습니다."}
      </p>
      <button
        onClick={handleNavigateToResults}
        className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
      >
        결과 페이지로 이동하기
      </button>
    </>
</div>
</div> */}
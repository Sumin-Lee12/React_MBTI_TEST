import React, { useState } from "react";
import { getTestResults } from "../api/testResults";
import { useNavigate } from "react-router-dom";


const TestResult = () => {
  // api에서 mbti결과값 가져오기

  return (
    <div className="w-full min-h-screen py-11 px-28 flex flex-col items-center">
    <div className="bg-blue-100 w-full min-h-[400px] p-5 rounded-xl flex justify-center items-center flex-col">
      <h2>테스트 결과: </h2>
      <p></p>
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
import React from "react";
import { getTestResults } from "../api/testResults";


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

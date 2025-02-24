import React, { useEffect, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const TestPage = ({ user }) => { 
  const navigate = useNavigate();
  const [result, setResult] = useState(null);




// 이게 mbti테스트 제출할 때 실시되는 코드인데 여기서 네넹 네! 엥 잠깐만용네네네네

  const handleTestSubmit = async (answers) => {
    try {
      const mbtiResult = calculateMBTI(answers);
      await createTestResult(mbtiResult, user); 
      alert("제출이 성공하였습니다!")
      setResult(mbtiResult);
      console.log("this is 결과 && is from 테스트서브밋함수 ==> ",setResult)
    } catch (error) {
      alert("제출 실패! 아쉽지만 다음 기회에...");
      console.log("제출 실패! 오류 코드 ==> ", error); 
    }
  };

  const handleNavigateToResults = () => {
    navigate("testresultpage/");
  }


  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default TestPage;

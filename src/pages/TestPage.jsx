import React, { useEffect, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const TestPage = () => { 
  const navigate = useNavigate();
  const [result, setResult] = useState(null);




// 이게 mbti테스트 제출할 때 실시되는 코드인데 여기서 네넹 네! 엥 잠깐만용네네네네

  const handleTestSubmit = async (answers) => {
    try {
      const mbtiResult = calculateMBTI(answers);
      await createTestResult(mbtiResult); 
      alert("제출이 성공하였습니다!")
      setResult(mbtiResult);
    } catch (error) {
      alert("제출 실패! 아쉽지만 다음 기회에...");
      console.log("제출 실패! 오류 코드 ==> ", error); 
    }
  };

  const handleNavigateToResults = () => {
    navigate("/testresultpage");
  }


  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-5xl h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mt-10 mb-24 flex justify-center text-blue-500">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
          <div className="flex flex-col items-center w-full">
            <div className="bg-blue-100 w-full min-h-[400px] p-16 rounded-xl flex justify-between items-center flex-col">
              <h1 className="text-3xl font-bold text-primary-color mb-6">
                테스트 결과: {result}
              </h1>
              <p className="text-lg/[30px] text-gray-700 mb-10 p-5">
                {mbtiDescriptions[result] ||
                  "해당 성격 유형에 대한 설명이 없습니다."}
              </p>
              <button
                onClick={handleNavigateToResults}
                className="w-1/2 bg-primary text-red-500 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
              >
                결과 페이지로 이동하기
              </button>
            </div>
          </div>
            
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;

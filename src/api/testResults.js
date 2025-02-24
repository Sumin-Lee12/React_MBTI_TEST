import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults';



export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const createTestResult = async (resultData) => {
    const response = await axios.post(API_URL, {resultData});
    return response.data;
};


export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("테스트 결과 삭제 중 오류 발생 ==> ", error);
  }
};


export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, {visibility});
    return response.data;
  } catch (error) {
    console.error("테스트 결과 업데이트 중 오류 발생 ==> ", error);
  }
};
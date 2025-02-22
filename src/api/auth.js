import axios from 'axios';

export const register = async (userInfo) => {

    try {
      await axios.post("http://localhost:4000/user", userInfo);
      alert("회원가입이 성공적으로 완료되었습니다.");
    } catch (error) {
      console.log("회원가입 도중 오류가 발생하였습니다 ==>", error);
    }

  };


export const getUserProfile = async (userInfo) => {
  try {
    await axios.get(`http://localhost:4000/user?id=${userInfo.id}`)
  } catch (error) {
    console.log("회원정보를 가져오는 도중 오류가 발생하였습니다 ==>", error);
  }
};

export const login = (userInfo) => {
  try {
    if (userInfo === abc) {
      
    }
  } catch (error) {
    console.log("로그인 시도 중 오류가 발생하였습니다 ==>", error);
  }
};

import axios from "axios";

const API_URL = 'https://www.nbcamp-react-auth.link';

export const register = async (userInfo) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      id: userInfo.id,
      password: userInfo.password,
      nickname: userInfo.nickname,
    });
    alert("회원가입이 완료되었습니다.");
    return response.data;
  } catch (error) {
    console.error("회원가입 도중 오류 발생 ==> ", error);
  }
};

export const login = async (userInfo) => {
  try {
    const {data} = await axios.post(`${API_URL}/login`, {
      id: userInfo.id,
      password: userInfo.password,
    });
    alert("로그인이 완료되었습니다.");
    localStorage.setItem("accessToken", data.accessToken);
  } catch (error) {
    console.error("로그인 도중 오류 발생 ==> ", error);
  };
};

export const getUserProfile = async (userInfo) => {

};

export const updateProfile = async (userInfo) => {

};












// import axios from 'axios';

// export const register = async (userInfo) => {

//     try {
//       await axios.post("http://localhost:4000/user", userInfo);
//       alert("회원가입이 성공적으로 완료되었습니다.");
//     } catch (error) {
//       console.log("회원가입 도중 오류가 발생하였습니다 ==>", error);
//     }

//   };


// export const getUserProfile = async (userInfo) => {
//   try {
//     await axios.get(`http://localhost:4000/user?id=${userInfo.id}`)
//   } catch (error) {
//     console.log("회원정보를 가져오는 도중 오류가 발생하였습니다 ==>", error);
//   }
// };

// export const login = (userInfo) => {
//   try {
//     if (userInfo === abc) {
      
//     }
//   } catch (error) {
//     console.log("로그인 시도 중 오류가 발생하였습니다 ==>", error);
//   }
// };

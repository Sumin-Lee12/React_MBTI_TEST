import axios from 'axios';

export const register = async (userInfo) => {

    try {
      await axios.post("http://localhost:4000/todos", userInfo);
      alert("회원가입이 성공적으로 완료되었습니다.");
    } catch (error) {
      console.log("회원가입 도중 오류가 발생하였습니다 ==>", error);
    }

  };

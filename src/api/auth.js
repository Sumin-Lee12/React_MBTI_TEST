import axios from "axios";
import useAuthStore from "../zustand/useAuthStore";
import useUsersStore from "../zustand/useUsersStore";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userInfo) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, {
      id: userInfo.id,
      password: userInfo.password,
      nickname: userInfo.nickname,
    });
    alert("회원가입이 완료되었습니다.");
    useUsersStore.getState().createUser(data);
    return data;
  } catch (error) {
    console.error("회원가입 도중 오류 발생 ==> ", error);
  }
};

export const userLogin = async (userInfo) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, {
      id: userInfo.id,
      password: userInfo.password,
    });

    alert("로그인이 완료되었습니다.");
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("nick", data.nickname);

    // localStorage.getItem('nick')
    // 로그인한 유저 정보를 zustand 상태에 저장
    const { login } = useAuthStore.getState();
    login([userInfo]); // 기존 users 배열을 덮어씌우거나, 필요에 따라 업데이트 가능
    return data;
  } catch (error) {
    console.error("로그인 도중 오류 발생 ==> ", error);
  }
};

export const getUserProfile = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    if (!token) {
      console.log("토큰이 없습니다!");
      return;
    }

    const { data } = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    useAuthStore.getState().setUsers([data]);
    alert("회원정보 확인 완료!");
  } catch (error) {
    console.error("회원정보 확인 도중 오류 발생 ==> ", error);
  }
};

export const updateProfile = async ({ accessToken, formData }) => {
  try {
    const response = await axios.patch(`${API_URL}/profile`, formData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    alert("회원가입이 완료되었습니다.");
    return response.data;
  } catch (error) {
    console.error("회원가입 도중 오류 발생 ==> ", error);
  }
};

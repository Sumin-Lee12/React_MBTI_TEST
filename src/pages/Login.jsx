import AuthForm from "../components/AuthForm";
import { userLogin, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (userInfo) => {
    try {
      await userLogin(userInfo);
      console.log("userInfo 1 ==>", userInfo);
      dispatch(login());
      console.log("userInfo 1 ==>", userInfo);
      navigate("/");
    } catch {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
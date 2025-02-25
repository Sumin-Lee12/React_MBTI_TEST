import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../zustand/useAuthStore';

const Header = () => {
  const { isLogin, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleUserStatus = () => {
    {isLogin ? logout() : navigate("/login")};
  };
  
  const orageText = {class: "text-orange-500"};

  return (
    <div className='h-full flex justify-between items-center mx-10 font-bold'>
      <div><Link to={"/"}>HOME</Link></div>
      <div className='flex flex-row gap-5'>
        {isLogin && (
          <>
            <div><Link to={"/profile"} {...orageText}>프로필</Link></div>
            <div><Link to={"/testpage"} {...orageText}>테스트</Link></div>
            <div><Link to={"/testresultpage"} {...orageText}>결과 보기</Link></div>
          </>
        )}
        
        <button type='button' onClick={handleUserStatus}>{isLogin ? '로그아웃' : '로그인'}</button>
      </div>
    </div>
  )}

export default Header;
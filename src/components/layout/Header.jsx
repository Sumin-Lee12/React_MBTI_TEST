import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../zustand/useAuthStore';

const Header = () => {
  const { isLogin, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleUserStatus = () => {
    {isLogin ? logout() : navigate("/login")};
  };

  return (
    <div>
      <div><Link to={"/"}/>HOME</div>
      <div>
        <button type='button' onClick={handleUserStatus}>{isLogin ? '로그아웃' : '로그인'}</button>
      </div>
    </div>
  )}

export default Header;
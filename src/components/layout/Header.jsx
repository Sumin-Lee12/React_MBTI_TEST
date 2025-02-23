import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const isLogin = useSelector((state) => {state.auth.isLogin});
  
  return (
    <div>
      <div><Link to={"/"}/>HOME</div>
      <div>
        <button>{isLogin ? '로그아웃' : '로그인'}</button>
      </div>
    </div>
  )}

export default Header;
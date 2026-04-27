import React from 'react';
import './Login.css';
import logImg from '../assets/logimg.jpg';
import donggukLogo from '../assets/logo.png';

const LoginPage = () => (
  <div className="loginContainer">
    <div className="whiteBox">
      <div className="leftImage">
        <img src={logImg} alt="로그인 이미지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="rightForm">
        <img src={donggukLogo} alt="로고 이미지" style={{ width: '300px' }} />
        <h1>역사를 걸으면 동국이 보이고<br />동국이 걸으면 역사가 된다.</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="btnPrimary">로그인</button>
        <button className="btnGoogle">회원가입</button>
      </div>
    </div>
  </div>
);

export default LoginPage;
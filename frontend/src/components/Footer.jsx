import React from 'react';
import { Link } from 'react-router-dom'; // Link 추가
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/announce"><span>공지사항</span></Link>
            <Link to="/majorcommunity"><span>전공 게시판</span></Link>
            <Link to="/gradecommunity"><span>학년 게시판</span></Link>
            <Link to="/mypage"><span>마이 페이지</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
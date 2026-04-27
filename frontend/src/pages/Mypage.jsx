import React, { useEffect, useState } from 'react';
import './Mypage.css';
import writtnLogo from '../assets/write.png';
import writtencommentsLogo from '../assets/writtencomment.png';
import heartLogo from '../assets/heart.png';

const BoardCard = ({ title, icon, isLarge }) => {
  return (
    <div className={`board-card ${isLarge ? 'large' : 'small'}`}>
      <div className="board-header">
        <span className="board-icon">
          <img src={icon} alt={title} className="header-icon-img" />
        </span>
        <h2 className="board-title">{title}</h2>
      </div>
      <div className="board-content">
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
  }, []);

  return (
    <main className="main-container">
      <div className="grid-layout">
        <BoardCard 
          title="작성한 글"
          icon={writtnLogo}
          isLarge={true}
        />
        <div className="side-boards">
          <BoardCard 
            title="작성한 댓글"
            icon={writtencommentsLogo}
          />
          <BoardCard 
            title="좋아요 남긴 글" 
            icon={heartLogo}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
import React, { useEffect, useState } from 'react';
import './Gradecommunity.css';
import communityLogo from '../assets/community.png';

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
      <div className="announce-grid-layout">
        <BoardCard 
          title="학년 게시판"
          icon={communityLogo} 
          isLarge={true}
        />
      </div>
    </main>
  );
};

export default Home;
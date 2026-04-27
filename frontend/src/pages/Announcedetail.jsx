import React from 'react';
import './Announcedetail.css';
import announceLogo from '../assets/announce.png';
import { FaReply } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const AnnounceDetail = () => {
  const data = {
    title: "제목",
    author: "작성자",
    date: "20xx.xx.xx.",
    content: "내용",
    filename: "cjaqnvkdlf.pdf"
  };

  return (
    <main className="main-container">
      <div className="board-card detail-card">
        <div className="board-header detail-header">
          <div className="header-left">
            <span className="board-icon">
              <img src={announceLogo} alt="icon" className="header-icon-img" />
            </span>
            <h2 className="board-title">공지사항</h2>
          </div>
          <button className="back-button" onClick={() => window.history.back()}>
             <FaReply style={{ transform: 'scaleX(-1)' }} />
          </button>
        </div>

        <div className="post-meta">
          <div className="meta-row">
            <div className="meta-item"><strong>제목 :</strong> {data.title}</div>
          </div>
          <div className="meta-row split">
            <div className="meta-item"><strong>작성자 :</strong> {data.author}</div>
            <div className="meta-item date"><strong>작성일 :</strong> {data.date}</div>
          </div>
        </div>

        <div className="board-content detail-content">
          <div className="content-inner">
            {data.content}
          </div>
        </div>

        <div className="detail-footer">
          <div className="file-section">
            <strong>첨부파일 :</strong> <span className="file-link">{data.filename}</span>
          </div>
          <button className="like-button">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </main>
  );
};

export default AnnounceDetail;
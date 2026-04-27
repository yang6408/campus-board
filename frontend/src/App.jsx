import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Announce from './pages/Announce';
import AnnDetail from './pages/Announcedetail';
import Majorcommunity from './pages/Majorcommunity';
import MajDetail from './pages/Majordetail';
import Gradecommunity from './pages/Gradecommunity';
import GraDetail from './pages/Gradedetail';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/anndetail" element={<AnnDetail />} />
        <Route path="/majorcommunity" element={<Majorcommunity />} />
        <Route path="/majdetail" element={<MajDetail />} />
        <Route path="/gradecommunity" element={<Gradecommunity />} />
        <Route path="/gradetail" element={<GraDetail />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
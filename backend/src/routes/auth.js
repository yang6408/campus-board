// TODO: express, User 모델, jsonwebtoken, bcryptjs import

// POST /api/auth/register — 회원가입
// body: { username, email, password }
// TODO: 이메일 중복 체크
// TODO: User 생성 및 저장 (비밀번호는 User 모델에서 자동 해싱)
// TODO: JWT 발급 후 응답

// POST /api/auth/login — 로그인
// body: { email, password }
// TODO: 이메일로 유저 조회
// TODO: 비밀번호 비교 (bcrypt)
// TODO: JWT 발급 후 응답

// TODO: router export

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// POST /api/auth/sync - Auth0 로그인 후 사용자 정보를 DB에 동기화
router.post('/sync', authMiddleware, async (req, res) => {
  try {
    // 1. Auth0 토큰에서 고유 ID(sub)만 확실하게 뽑아냄
    const auth0_id = req.auth.payload.sub;
    
    // 2. email과 name은 토큰이 아닌 프론트엔드(req.body)에서 안전하게 받음
    const { email, name, student_id, major, grade } = req.body;

    let user = await User.findOne({ auth0_id });

    if (!user) {
      // [추가된 방어 로직] 최초 가입 시 프론트엔드가 필수 정보를 다 보냈는지 검사
      if (!email || !name || !student_id || !major || !grade) {
        return res.status(400).json({ 
          message: "최초 동기화 실패: 이메일, 이름, 학번, 전공, 학년 정보가 모두 필요합니다." 
        });
      }

      // 새로운 사용자인 경우 DB에 저장
      user = new User({ auth0_id, email, name, student_id, major, grade });
      await user.save();
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: '사용자 동기화 실패', error: error.message });
  }
});

module.exports = router;
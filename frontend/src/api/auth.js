// TODO: axios import
// TODO: BASE_URL 설정 (vite.config.js proxy 또는 import.meta.env 활용)

// register(data) — 회원가입
// @param {{ username, email, password }} data
// TODO: POST /api/auth/register 요청
// TODO: 응답에서 token 추출 후 localStorage 저장 여부 결정

// login(data) — 로그인
// @param {{ email, password }} data
// @returns {{ token, user }}
// TODO: POST /api/auth/login 요청
// TODO: 토큰 저장 방식 결정 (localStorage vs httpOnly 쿠키)

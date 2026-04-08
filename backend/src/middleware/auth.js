// TODO: jsonwebtoken import

// JWT 인증 미들웨어
// Authorization 헤더에서 Bearer 토큰을 추출하고 검증합니다.

// TODO: req.headers['authorization']에서 토큰 추출 ("Bearer <token>")

// TODO: 토큰이 없으면 401 응답

// TODO: jwt.verify로 토큰 검증 (process.env.JWT_SECRET 사용)

// TODO: 검증된 payload를 req.user에 저장 후 next() 호출

// TODO: 검증 실패 시 403 응답

// TODO: authMiddleware export

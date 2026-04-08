// TODO: express, Post 모델, authMiddleware import

// GET /api/posts — 게시글 목록 조회
// query: ?page=1&limit=10
// TODO: 페이지네이션 적용하여 목록 반환

// POST /api/posts — 게시글 작성 (인증 필요)
// body: { title, content }
// TODO: authMiddleware 적용
// TODO: req.user.id를 author로 사용하여 Post 생성 및 저장

// GET /api/posts/:id — 게시글 상세 조회
// TODO: author populate하여 단건 반환

// PATCH /api/posts/:id — 게시글 수정 (인증 필요, 작성자 본인만)
// body: { title?, content? }
// TODO: authMiddleware 적용
// TODO: 게시글 조회 후 author 일치 여부 확인 후 수정

// DELETE /api/posts/:id — 게시글 삭제 (인증 필요, 작성자 본인만)
// TODO: authMiddleware 적용
// TODO: 게시글 조회 후 author 일치 여부 확인 후 삭제

// TODO: router export

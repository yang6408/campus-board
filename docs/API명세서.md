# API 명세서

> Base URL: `http://localhost:5000/api`

---

## 인증 (Auth)

### POST /auth/register
- **설명**: 회원가입
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: `201`
  ```json
  { "token": "JWT_TOKEN", "user": { ... } }
  ```

---

### POST /auth/login
- **설명**: 로그인
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: `200`
  ```json
  { "token": "JWT_TOKEN", "user": { ... } }
  ```

---

## 게시판 (Posts)

> 인증이 필요한 요청은 `Authorization: Bearer <token>` 헤더를 포함합니다.

### GET /posts
- **설명**: 게시글 목록 조회
- **Query**: `?page=1&limit=10`
- **Response**: `200`
  ```json
  { "posts": [...], "total": 0, "page": 1 }
  ```

### POST /posts *(인증 필요)*
- **설명**: 게시글 작성
- **Request Body**: `{ "title": "string", "content": "string" }`
- **Response**: `201` — 생성된 게시글 객체

### GET /posts/:id
- **설명**: 게시글 상세 조회
- **Response**: `200` — 게시글 객체 (comments 포함)

### PATCH /posts/:id *(인증 필요, 본인만)*
- **설명**: 게시글 수정
- **Request Body**: `{ "title"?: "string", "content"?: "string" }`
- **Response**: `200` — 수정된 게시글 객체

### DELETE /posts/:id *(인증 필요, 본인만)*
- **설명**: 게시글 삭제
- **Response**: `200` — `{ "message": "삭제되었습니다." }`

---

## 공지사항 (Notices)

### GET /notices
- **설명**: 공지사항 목록 조회
- **Query**: `?page=1&limit=10&source=학생처`
- **Response**: `200`
  ```json
  { "notices": [...], "total": 0 }
  ```

### GET /notices/:id
- **설명**: 공지사항 상세 조회
- **Response**: `200` — 공지사항 객체

---

## 에러 응답 형식

```json
{
  "message": "에러 메시지"
}
```

| 코드 | 의미 |
|------|------|
| 400  | 잘못된 요청 |
| 401  | 인증 필요 |
| 403  | 권한 없음 |
| 404  | 리소스 없음 |
| 500  | 서버 오류 |

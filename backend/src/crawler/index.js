// TODO: axios, parseNotices(./parser), Notice 모델, dotenv import

// crawl() — 크롤러 메인 함수
// 대상 URL에서 HTML을 가져와 파싱 후 DB에 저장합니다.

// TODO: process.env.CRAWL_TARGET_URL 확인 (없으면 에러 출력 후 종료)

// TODO: axios.get으로 HTML 가져오기
// TODO: HTTP 요청 옵션 추가 (User-Agent, 쿠키 등)

// TODO: parseNotices(html) 호출하여 공지사항 배열 획득

// TODO: 중복 체크 후 새로운 공지사항만 DB에 저장
// (Notice.findOneAndUpdate, url 기준 upsert)

// TODO: { crawl } export

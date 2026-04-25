const cron = require('node-cron');
const { crawl } = require('./index');

const startScheduler = () => {
  // 서버 시작 시 즉시 1회 실행
  crawl().catch(err => console.log('크롤러 초기 실행 오류:', err.message));

  // 매일 오전 8시 실행 (cron: '분 시 일 월 요일')
  cron.schedule('0 8 * * *', () => {
    console.log('⏰ 크롤러 스케줄 실행...');
    crawl().catch(err => console.log('크롤러 스케줄 오류:', err.message));
  });

  console.log('✅ 크롤러 스케줄러 등록 완료 (매일 오전 8시)');
};

startScheduler();

module.exports = { startScheduler };

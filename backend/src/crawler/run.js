require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const mongoose = require('mongoose');
const { crawl } = require('./index');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/campus-info';

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB 연결 성공');
    await crawl();
    await mongoose.disconnect();
    console.log('🔌 MongoDB 연결 종료');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ MongoDB 연결 실패:', err.message);
    process.exit(1);
  });

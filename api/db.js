const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// 테이블 자동 생성
pool.query(`
  CREATE TABLE IF NOT EXISTS contact_inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    sms_sent BOOLEAN DEFAULT FALSE
  )
`).then(() => console.log('✅ contact_inquiries 테이블 준비 완료'))
  .catch(err => console.error('❌ DB 초기화 오류:', err.message));

module.exports = pool;

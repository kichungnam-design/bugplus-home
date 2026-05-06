require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const db      = require('./db');
const { sendSMS } = require('./sms');
const { sendOwnerNotification, sendInquirerReply } = require('./mailer');

const app  = express();
const PORT = process.env.PORT || 3400;

app.use(cors());
app.use(express.json());

// ── 문의 접수 API ────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, company, phone, email, message } = req.body;

  // 기본 검증
  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, message: '필수 항목을 입력해 주세요.' });
  }

  // 전화번호 정리 (하이픈·공백 제거)
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  try {
    // 1. DB 저장
    const result = await db.query(
      `INSERT INTO contact_inquiries (name, company, phone, email, message)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [name, company || null, cleanPhone, email || null, message]
    );
    const inquiryId = result.rows[0].id;
    console.log(`✅ 문의 저장 완료 (ID: ${inquiryId})`);

    let mailSent = false;

    // 2. 사장님에게 문의 알림 이메일
    await sendOwnerNotification({ name, company, phone: cleanPhone, email, message });

    // 3. 문의자에게 연락처 자동 발송 (이메일 있을 경우)
    await sendInquirerReply({ name, email });

    // 4. DB mail_sent 업데이트
    await db.query(
      `UPDATE contact_inquiries SET sms_sent = TRUE WHERE id = $1`,
      [inquiryId]
    );
    mailSent = true;

    return res.json({ success: true, message: '문의가 접수되었습니다.', id: inquiryId, mailSent });

  } catch (err) {
    console.error('❌ 문의 처리 오류:', err.message);
    return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
  }
});

// ── 문의 목록 조회 (관리용) ────────────────────────────────────
app.get('/api/contact', async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM contact_inquiries ORDER BY created_at DESC LIMIT 100`
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── 헬스체크 ─────────────────────────────────────────────────
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'bugplus-api' }));

app.listen(PORT, () => {
  console.log(`🚀 Bug Plus API 서버 실행 중 → http://localhost:${PORT}`);
});

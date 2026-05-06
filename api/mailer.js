const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,  // 앱 비밀번호 (16자리)
  },
});

/**
 * 사장님에게 문의 알림 이메일 발송
 */
async function sendOwnerNotification({ name, company, phone, email, message }) {
  await transporter.sendMail({
    from: `"Bug Plus 문의시스템" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `[Bug Plus 문의] ${name}님 (${company || '회사미입력'})`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0f172a;padding:24px 32px;">
          <h2 style="color:#38bdf8;margin:0;font-size:20px;">🐞 Bug Plus 새 문의 접수</h2>
        </div>
        <div style="padding:32px;background:#fff;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#64748b;width:80px;">이름</td>
                <td style="padding:10px 0;font-weight:bold;color:#0f172a;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;">회사</td>
                <td style="padding:10px 0;color:#0f172a;">${company || '-'}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;">연락처</td>
                <td style="padding:10px 0;color:#0f172a;">${phone}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;">이메일</td>
                <td style="padding:10px 0;color:#0f172a;">${email || '-'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
          <p style="color:#64748b;margin:0 0 8px;">문의 내용</p>
          <p style="color:#0f172a;background:#f8fafc;padding:16px;border-radius:8px;margin:0;">${message}</p>
        </div>
        <div style="background:#f8fafc;padding:16px 32px;text-align:center;color:#94a3b8;font-size:12px;">
          Bug Plus | www.bplus-gem.kr
        </div>
      </div>
    `,
  });
}

/**
 * 문의자에게 연락처 자동 발송
 */
async function sendInquirerReply({ name, email }) {
  if (!email) return;  // 이메일 없으면 스킵

  await transporter.sendMail({
    from: `"Bug Plus (남기충 대표)" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `[Bug Plus] 문의 감사합니다, ${name}님!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0f172a;padding:24px 32px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="background:#fff;border-radius:8px;width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:20px;font-weight:900;color:#0f172a;">B<sup style="color:#ef4444;font-size:12px;">+</sup></span>
            </div>
            <h2 style="color:#fff;margin:0;font-size:20px;">Bug Plus</h2>
          </div>
        </div>
        <div style="padding:32px;background:#fff;">
          <p style="color:#0f172a;font-size:16px;">안녕하세요, <strong>${name}</strong>님!</p>
          <p style="color:#475569;line-height:1.7;">
            Bug Plus에 문의해 주셔서 감사합니다.<br>
            빠른 시일 내에 직접 연락드리겠습니다.
          </p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;">
          <p style="color:#64748b;font-size:14px;margin:0 0 16px;font-weight:bold;">담당자 연락처</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:80px;">담당자</td>
                <td style="padding:8px 0;color:#0f172a;font-size:14px;">남기충 대표 (Ki Charles Nam)</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">전화</td>
                <td style="padding:8px 0;color:#0f172a;font-size:14px;">010-7576-8570</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">이메일</td>
                <td style="padding:8px 0;color:#0ea5e9;font-size:14px;">kichung.nam@gmail.com</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">웹사이트</td>
                <td style="padding:8px 0;font-size:14px;"><a href="https://www.bplus-gem.kr" style="color:#0ea5e9;">www.bplus-gem.kr</a></td></tr>
          </table>
        </div>
        <div style="background:#f8fafc;padding:20px 32px;">
          <p style="color:#64748b;font-size:13px;margin:0 0 8px;font-weight:bold;">Bug Plus 핵심 솔루션</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <span style="background:#0ea5e9;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;">🏭 BG-MES</span>
            <span style="background:#8b5cf6;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;">🛠️ GemmaUI</span>
            <span style="background:#10b981;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;">📚 pass-G</span>
          </div>
        </div>
        <div style="background:#0f172a;padding:16px 32px;text-align:center;color:#475569;font-size:12px;">
          © 2026 Bug Plus (B+) | 서울시 서대문구 세검정로1길 95
        </div>
      </div>
    `,
  });
}

module.exports = { sendOwnerNotification, sendInquirerReply };

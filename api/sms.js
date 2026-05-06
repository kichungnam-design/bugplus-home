const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

/**
 * 알리고 SMS 발송
 * @param {string} receiver - 수신자 번호 (01012345678)
 * @param {string} msg - 발송 메시지
 */
async function sendSMS(receiver, msg) {
  const form = new FormData();
  form.append('key',      process.env.ALIGO_API_KEY);
  form.append('user_id',  process.env.ALIGO_USER_ID);
  form.append('sender',   process.env.ALIGO_SENDER);
  form.append('receiver', receiver);
  form.append('msg',      msg);
  form.append('msg_type', 'SMS');

  try {
    const res = await axios.post('https://apis.aligo.in/send/', form, {
      headers: form.getHeaders(),
    });
    console.log(`📱 SMS 발송 → ${receiver}:`, res.data);
    return res.data;
  } catch (err) {
    console.error('❌ SMS 발송 실패:', err.message);
    throw err;
  }
}

module.exports = { sendSMS };

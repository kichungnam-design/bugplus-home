import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3400';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrMsg(data.message || '오류가 발생했습니다.');
      }
    } catch (err) {
      setStatus('error');
      setErrMsg('서버 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <section id="contact" className="bg-slate-800 py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-4xl font-black text-white">도입 상담 문의</h2>
          <p className="text-slate-400 mt-4">솔루션 도입 및 커스텀 개발 문의를 남겨주세요</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">연락처 정보</h3>
            <div className="space-y-5 text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">📞</span>
                <div>
                  <div className="text-xs text-slate-500 mb-1">전화</div>
                  <div>010 **** 8570</div>
                  <div className="text-xs text-slate-500 mt-0.5">(문의시 폰으로 공유됨)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">✉️</span>
                <div>
                  <div className="text-xs text-slate-500 mb-1">이메일</div>
                  <div>kichung.nam@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🌐</span>
                <div>
                  <div className="text-xs text-slate-500 mb-1">웹사이트</div>
                  <div>www.bplus-gem.kr</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <div className="text-xs text-slate-500 mb-1">주소</div>
                  <div>서울시 서대문구 세검정로1길 95<br/>117동 103호</div>
                </div>
              </div>
            </div>

            {/* 안내 박스 */}
            <div className="mt-8 bg-sky-500/10 border border-sky-500/30 rounded-xl p-4 text-sm text-sky-300">
              💬 문의 제출 시 입력하신 연락처로<br/>
              Bug Plus 담당자 정보가 자동 발송됩니다.
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            {status === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-white font-bold text-xl mb-2">문의가 접수되었습니다!</p>
                <p className="text-slate-400 text-sm">
                  입력하신 번호로 Bug Plus 연락처가<br/>
                  문자로 발송되었습니다.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name:'', company:'', phone:'', email:'', message:'' }); }}
                  className="mt-6 text-sky-400 text-sm underline">
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name',    placeholder: '담당자명 *',  type: 'text' },
                  { name: 'company', placeholder: '회사명',       type: 'text' },
                  { name: 'phone',   placeholder: '연락처 * (문자 수신 가능 번호)', type: 'tel' },
                  { name: 'email',   placeholder: '이메일',       type: 'email' },
                ].map(f => (
                  <input key={f.name}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    required={['name','phone'].includes(f.name)}
                    className="w-full bg-slate-900 border border-slate-600 focus:border-sky-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-colors text-sm"
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="문의 내용을 입력해 주세요 *"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-600 focus:border-sky-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-colors resize-none text-sm"
                />
                {errMsg && (
                  <p className="text-red-400 text-sm">{errMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors">
                  {status === 'loading' ? '전송 중...' : '문의 보내기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

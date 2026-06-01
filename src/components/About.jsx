import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-slate-800 py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-3">About Bug Plus</p>
          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            현장에서 태어난<br/>
            <span className="text-sky-400">실무형 소프트웨어</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Bug Plus(B+)는 중소기업 현장의 복잡한 문제를 단순하고 효율적인 소프트웨어로 해결하는 회사입니다.
            제조 현장의 비효율, 개발자의 반복 작업, 수험생의 학습 어려움을 기술로 해소합니다.
          </p>
          <p className="text-slate-400 leading-relaxed">
            '복잡함을 단순함으로' — 이 철학 하나로 BG-MES, GemmaUI, pass-G, AeroTest, Gemma R Ethics
            5가지 핵심 솔루션을 만들었습니다.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { num: '5', label: '핵심 솔루션' },
              { num: '10+', label: '년 현장 경험' },
              { num: '100%', label: '커스터마이징' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-black text-sky-400">{item.num}</div>
                <div className="text-slate-400 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-sky-500/10 border border-sky-500/30 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <div className="text-white font-black text-lg">남기충</div>
              <div className="text-slate-400 text-sm">Ki Charles Nam · 대표</div>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm mb-6">
            "현장에서 실제로 쓰이는 소프트웨어를 만들자."<br/>
            이 한 가지 원칙으로 모든 제품을 설계합니다.
          </p>
          <div className="space-y-2 text-sm text-slate-400">
            <div>📞 010 ****  8570 <span className="text-xs text-slate-500">(문의시 폰으로 공유됨)</span></div>
            <div>✉️ kichung.nam@gmail.com</div>
            <div>🌐 www.bplus-gem.kr</div>
            <div>📍 서울시 서대문구 세검정로1길 95</div>
          </div>
        </div>
      </div>
    </section>
  );
}

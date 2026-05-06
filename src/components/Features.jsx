import React from 'react';

const features = [
  { icon: '⚡', title: '빠른 도입', desc: '표준화된 모듈 구조로 기존 대비 50% 이상 빠른 시스템 구축이 가능합니다.' },
  { icon: '🔧', title: '높은 커스터마이징', desc: '고객사의 업무 프로세스에 맞게 100% 맞춤 개발이 가능합니다.' },
  { icon: '📊', title: '실시간 데이터', desc: '현장 데이터를 실시간으로 수집·분석하여 경영 의사결정을 지원합니다.' },
  { icon: '🛡️', title: '안정적 운영', desc: '검증된 기술 스택과 지속적인 유지보수로 안정적인 시스템 운영을 보장합니다.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-900 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-3">Why Bug Plus</p>
          <h2 className="text-4xl font-black text-white">왜 Bug Plus인가?</h2>
          <p className="text-slate-400 mt-4">현장 경험에서 나온 실용적인 기술력</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title}
                 className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-sky-500/50 transition-colors text-center">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

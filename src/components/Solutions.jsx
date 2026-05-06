import React from 'react';

const solutions = [
  {
    id: 'bg-mes',
    emoji: '🏭',
    name: 'BG-MES',
    tag: '제조관리 솔루션',
    desc: '중소기업 제조 현장에 최적화된 스마트 MES 시스템. 생산계획부터 품질관리, 자재관리까지 실시간으로 통합 관리합니다.',
    features: ['실시간 생산 모니터링', 'MRP 자동 계산', '품질·불량 추적', '납기 준수율 향상'],
    color: 'sky',
  },
  {
    id: 'gemmaui',
    emoji: '🛠️',
    name: 'B+ GemmaUI',
    tag: '솔루션 개발 Tool',
    desc: '복잡한 기업 시스템을 빠르게 구축하는 UI 개발 프레임워크. 표준화된 컴포넌트로 개발 시간을 획기적으로 단축합니다.',
    features: ['표준 컴포넌트 라이브러리', '메뉴·권한 통합 관리', '빠른 커스터마이징', 'BG-MES 기반 설계'],
    color: 'violet',
  },
  {
    id: 'pass-g',
    emoji: '📚',
    name: 'pass-G',
    tag: '문제풀이 학습 솔루션',
    desc: '자격증·공무원 시험을 위한 AI 기반 학습 솔루션. 법령 원문과 연계하여 정확한 근거 기반 학습을 지원합니다.',
    features: ['AI 문제 분석·해설', '법령 원문 연계', '오답 노트 자동 생성', '시험 유형별 맞춤 학습'],
    color: 'emerald',
  },
];

const colorMap = {
  sky:    { badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30', border: 'border-sky-500/30', btn: 'text-sky-400' },
  violet: { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30', border: 'border-violet-500/30', btn: 'text-violet-400' },
  emerald:{ badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'border-emerald-500/30', btn: 'text-emerald-400' },
};

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-900 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-3">Our Solutions</p>
          <h2 className="text-4xl font-black text-white">3대 핵심 솔루션</h2>
          <p className="text-slate-400 mt-4">Bug Plus의 기술력이 담긴 검증된 솔루션입니다</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map(sol => {
            const c = colorMap[sol.color];
            return (
              <div key={sol.id}
                   className={`bg-slate-800 border ${c.border} rounded-2xl p-8 hover:scale-[1.02] transition-transform`}>
                <div className="text-5xl mb-4">{sol.emoji}</div>
                <div className={`inline-block border text-xs font-bold px-3 py-1 rounded-full mb-3 ${c.badge}`}>
                  {sol.tag}
                </div>
                <h3 className="text-white text-2xl font-black mb-3">{sol.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{sol.desc}</p>
                <ul className="space-y-2">
                  {sol.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full bg-current ${c.btn}`}></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

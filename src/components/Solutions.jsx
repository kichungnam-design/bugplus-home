import React from 'react';

const solutions = [
  {
    id: 'bg-mes',
    emoji: '🏭',
    name: 'BG-MES',
    tag: '제조관리 솔루션',
    isNew: false,
    updated: true,
    desc: '중소기업 제조 현장에 최적화된 스마트 MES 시스템. 생산계획부터 품질관리, 자재관리까지 실시간으로 통합 관리합니다.',
    features: [
      '실시간 생산 모니터링 (Command Center)',
      'MRP 자동 계산 · 납기 준수율 향상',
      '품질·불량 추적 · 수불장 · 재료비마감',
      'PCS (Partner\'s Collaboration System) 협력사 연계',
      '한/영/베트남어/중국어 4개국어 지원',
    ],
    color: 'sky',
  },
  {
    id: 'gemmaui',
    emoji: '🛠️',
    name: 'B+ GemmaUI',
    tag: '솔루션 개발 Tool',
    isNew: false,
    updated: true,
    desc: 'BG-MES 기반으로 설계된 기업용 UI 개발 프레임워크. 표준화된 컴포넌트로 복잡한 업무 시스템을 빠르게 구축합니다.',
    features: [
      'BG-MES 기반 표준 컴포넌트 라이브러리',
      '메뉴·권한 통합 관리',
      '신규 구축 시 높은 커스터마이징 지원',
      '다국어 i18n 내장 (한/영/베트남/중국어)',
    ],
    color: 'violet',
  },
  {
    id: 'pass-g',
    emoji: '📚',
    name: 'pass-G',
    tag: '문제풀이 학습 솔루션',
    isNew: false,
    updated: false,
    desc: '자격증·공무원 시험을 위한 AI 기반 학습 솔루션. 법령 원문과 연계하여 정확한 근거 기반 학습을 지원합니다.',
    features: [
      'AI 문제 분석·해설',
      '법령 원문 연계 (42개 법령/표준)',
      '오답 노트 자동 생성',
      '시험 유형별 맞춤 학습',
    ],
    color: 'emerald',
  },
  {
    id: 'aerotest',
    emoji: '🚀',
    name: 'AeroTest',
    tag: 'AI 테스트 자동화 솔루션',
    isNew: true,
    updated: false,
    desc: 'AI가 테스트 스크립트를 자동 생성하고 실행·분석까지 처리하는 차세대 E2E 테스트 자동화 엔진. ISO 29119-5 기반의 키워드 드리븐 방식으로 품질을 보장합니다.',
    features: [
      'Gemma Pen — AI E2E 스크립트 자동 생성',
      'Gemma Run — 실행 + AI 결과 분석',
      'Secure Coding 점검 (KISA/CWE 기준)',
      'Perf Monitor — Prometheus 장기 모니터링',
      'ISO 29119-5 · ISTQB CT-TAE · POM 준수',
    ],
    color: 'amber',
  },
  {
    id: 'gemma-r-ethics',
    emoji: '🤖',
    name: 'Gemma R Ethics',
    tag: '로봇 윤리 가드레일 솔루션',
    isNew: true,
    updated: false,
    desc: '로봇 AI의 물리적 판단을 4레이어(동기→판단→통제→회귀)로 실시간 검증하는 글로벌 컴플라이언스 솔루션. EU AI Act·ISO 13482·IEEE 7000 국제 표준을 코드로 구현합니다.',
    features: [
      '4레이어 컴플라이언스 파이프라인',
      'ROS2 하이브리드 브리지 (A/B 자동전환)',
      'NW 불통·배터리 부족 시 로컬 안전 모드',
      'ISO 13482 · IEEE 7000 · EU AI Act 준수',
      'ISO/IEC 42001 블랙박스 감사 로그',
    ],
    color: 'rose',
  },
];

const colorMap = {
  sky:    { badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30',     border: 'border-sky-500/30',     dot: 'bg-sky-400',     glow: 'hover:border-sky-400/60' },
  violet: { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30', border: 'border-violet-500/30', dot: 'bg-violet-400', glow: 'hover:border-violet-400/60' },
  emerald:{ badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'border-emerald-500/30', dot: 'bg-emerald-400', glow: 'hover:border-emerald-400/60' },
  amber:  { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',  border: 'border-amber-500/30',  dot: 'bg-amber-400',  glow: 'hover:border-amber-400/60' },
  rose:   { badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30',    border: 'border-rose-500/30',    dot: 'bg-rose-400',   glow: 'hover:border-rose-400/60' },
};

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-900 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-3">Our Solutions</p>
          <h2 className="text-4xl font-black text-white">5대 핵심 솔루션</h2>
          <p className="text-slate-400 mt-4">Bug Plus의 기술력이 담긴 검증된 솔루션입니다</p>
          <div className="flex items-center justify-center gap-5 mt-5">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>NEW
            </span>
            <span className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>UPDATED
            </span>
          </div>
        </div>

        {/* 기존 3개 */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map(sol => <SolutionCard key={sol.id} sol={sol} />)}
        </div>

        {/* 신규 2개 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.slice(3).map(sol => <SolutionCard key={sol.id} sol={sol} />)}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ sol }) {
  const c = colorMap[sol.color];
  return (
    <div className={`relative bg-slate-800 border ${c.border} ${c.glow} rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300`}>
      {sol.isNew && (
        <span className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold px-2.5 py-0.5 rounded-full">NEW</span>
      )}
      {sol.updated && !sol.isNew && (
        <span className="absolute top-4 right-4 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-2.5 py-0.5 rounded-full">UPDATED</span>
      )}
      <div className="text-5xl mb-4">{sol.emoji}</div>
      <div className={`inline-block border text-xs font-bold px-3 py-1 rounded-full mb-3 ${c.badge}`}>{sol.tag}</div>
      <h3 className="text-white text-2xl font-black mb-3">{sol.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{sol.desc}</p>
      <ul className="space-y-2">
        {sol.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`}></span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

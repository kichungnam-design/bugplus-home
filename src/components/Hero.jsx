import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-sky-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-red-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* 텍스트 */}
        <div>
          <div className="inline-block bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm px-4 py-1 rounded-full mb-6">
            Innovation Beyond Code
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            복잡함을<br/>
            <span className="text-sky-400">단순함</span>으로<br/>
            해결합니다
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Bug Plus는 중소기업의 제조 현장부터 학습 솔루션까지,<br/>
            실무에 최적화된 소프트웨어를 개발합니다.
          </p>
          <div className="flex gap-4">
            <a href="#solutions"
               className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              솔루션 보기
            </a>
            <a href="#contact"
               className="border border-slate-600 hover:border-sky-500 text-slate-300 hover:text-sky-400 font-bold px-8 py-4 rounded-xl transition-colors">
              상담 신청
            </a>
          </div>
        </div>

        {/* 로고 비주얼 */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-white font-black text-8xl leading-none relative inline-block">
                  B
                  <span className="absolute -top-2 -right-4 text-red-500 text-4xl">+</span>
                </div>
                <div className="text-slate-400 text-xl font-bold mt-2 tracking-widest">BUG PLUS</div>
              </div>
            </div>
            {/* 플로팅 뱃지 */}
            <div className="absolute -bottom-4 -right-4 bg-sky-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              www.bplus-gem.kr
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

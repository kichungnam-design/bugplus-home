import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center relative">
            <span className="text-slate-900 font-black text-lg leading-none">B</span>
            <span className="absolute -top-1 -right-1 text-red-500 font-black text-xs">+</span>
          </div>
          <span className="text-white font-black text-xl tracking-tight">Bug Plus</span>
        </div>

        {/* 네비 */}
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          {['about','solutions','features','contact'].map(id => (
            <a key={id} href={`#${id}`}
               className="hover:text-sky-400 transition-colors capitalize">
              {id === 'about' ? '소개' : id === 'solutions' ? '솔루션' : id === 'features' ? '특징' : '문의'}
            </a>
          ))}
        </nav>

        <a href="#contact"
           className="bg-sky-500 hover:bg-sky-400 text-white text-sm px-4 py-2 rounded-lg transition-colors">
          상담 신청
        </a>
      </div>
    </header>
  );
}

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Features />
      <Contact />

      {/* 푸터 */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Bug Plus (B+). All rights reserved.</p>
        <p className="mt-1">www.bplus-gem.kr | kichung.nam@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

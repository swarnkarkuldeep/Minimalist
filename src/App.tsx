import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const enterHover = () => setCursorVariant('hover');
  const leaveHover = () => setCursorVariant('default');

  const renderContent = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <CustomCursor variant={cursorVariant} />
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        onEnterHover={enterHover}
        onLeaveHover={leaveHover}
      />
      <main className="main-content">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer onEnterHover={enterHover} onLeaveHover={leaveHover} />
    </div>
  );
}

export default App;
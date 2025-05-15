import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import MasonryGrid from './MasonryGrid';
import { categories } from '../data/categories';

const INITIAL_VISIBLE = 6; // Number of categories to show initially
const LOAD_MORE_COUNT = 6; // Number of categories to load each time

const Home: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Minimalist</h1>
        <p className="hero-subtitle">Minimal. Radical.</p>
        <motion.div 
          className="scroll-down-indicator"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            transition: { 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            } 
          }}
          onClick={() => {
            const portfolioSection = document.querySelector('.portfolio-section');
            portfolioSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <span>Scroll Down</span>
        </motion.div>
      </section>
      <section className="portfolio-section">
        <MasonryGrid categories={categories.slice(0, visibleCount)} />
        {visibleCount < categories.length && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button
              onClick={handleLoadMore}
              style={{
                padding: 0,
                fontSize: 18,
                border: 'none',
                background: 'transparent',
                color: 'var(--off-white)',
                cursor: 'pointer',
                fontWeight: 600,
                fontFamily: 'ExaltedExDemo, cursive',
                textDecoration: 'underline'
              }}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
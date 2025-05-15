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
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Minimalist
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Minimal. Radical.
        </motion.p>
        <motion.div 
          className="scroll-down-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
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
      </motion.div>
      <motion.div 
        className="portfolio-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <MasonryGrid categories={categories.slice(0, visibleCount)} />
        {visibleCount < categories.length && (
          <motion.div 
            style={{ textAlign: 'center', marginTop: 32 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
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
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Home;
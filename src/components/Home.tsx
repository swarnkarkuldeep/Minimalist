import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import './Home.css';

const ITEMS_PER_LOAD = 6;

const Home = () => {
  const [visibleCategories, setVisibleCategories] = useState(ITEMS_PER_LOAD);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const loadMore = () => {
    setVisibleCategories(prev => Math.min(prev + ITEMS_PER_LOAD, categories.length));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="categories-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {categories.slice(0, visibleCategories).map((category) => (
          <motion.div
            key={category.id}
            className="category-item"
            variants={item}
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="category-image">
              <img src={category.coverImage} alt={category.name} />
            </div>
            <div className="category-info">
              <h2>{category.name}</h2>
              <p>{category.count} Photos</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visibleCategories < categories.length && (
        <motion.button
          className="load-more"
          onClick={loadMore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More
        </motion.button>
      )}

      {visibleCategories >= categories.length && (
        <motion.p
          className="no-more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No more categories to load
        </motion.p>
      )}
    </motion.div>
  );
};

export default Home;
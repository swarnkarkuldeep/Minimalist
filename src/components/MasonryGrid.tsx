import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioItems, PortfolioItem } from '../data/portfolioData';
import { Category } from '../data/categories';
import './MasonryGrid.css';

// Helper to get unique categories
function getUniqueCategoryItems(items: PortfolioItem[]): PortfolioItem[] {
  const seen = new Set<string>();
  return items.filter(item => {
    if (seen.has(item.category)) return false;
    seen.add(item.category);
    return true;
  });
}

interface MasonryGridProps {
  images?: string[];
  categories?: Category[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, categories }) => {
  // Determine items to render based on props
  const itemsToRender = images 
    ? images 
    : categories || getUniqueCategoryItems(portfolioItems);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="masonry-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {!images && !categories && 
        <motion.h1 
          className="portfolio-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h1>
      }
      <motion.div 
        className="masonry-grid"
        variants={containerVariants}
      >
        {images ? 
          (itemsToRender as string[]).map((imageUrl, index) => (
            <motion.div 
              key={index} 
              className="masonry-item"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img 
                src={imageUrl}
                alt={`Gallery image ${index + 1}`} 
                className="masonry-image"
              />
            </motion.div>
          )) : 
          (itemsToRender as (Category | PortfolioItem)[]).map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link 
                to={`/category/${encodeURIComponent('coverImage' in item ? item.name : item.category)}`}
                className="masonry-item"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
              <img 
                src={'coverImage' in item ? item.coverImage : item.imageUrl} 
                alt={'name' in item ? item.name : item.title} 
                className="masonry-image"
              />
              <div className="item-overlay">
                <h3>{'name' in item ? item.name : item.title}</h3>
                <p>{'name' in item ? item.name : item.category}</p>
              </div>
              </Link>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  );
};

export default MasonryGrid;
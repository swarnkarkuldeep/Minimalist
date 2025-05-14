import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="masonry-container">
      {!images && !categories && <h1 className="portfolio-title">Portfolio</h1>}
      <div className="masonry-grid">
        {images ? 
          (itemsToRender as string[]).map((imageUrl, index) => (
            <div 
              key={index} 
              className="masonry-item"
            >
              <img 
                src={imageUrl}
                alt={`Gallery image ${index + 1}`} 
                className="masonry-image"
              />
            </div>
          )) : 
          (itemsToRender as (Category | PortfolioItem)[]).map((item, index) => (
            <Link 
              to={`/category/${encodeURIComponent('coverImage' in item ? item.name : item.category)}`}
              key={index}
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
          ))
        }
      </div>
    </div>
  );
};

export default MasonryGrid;
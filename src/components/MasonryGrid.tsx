import { portfolioItems } from '../data/portfolioData';
import './MasonryGrid.css';

const MasonryGrid = () => {
  return (
    <div className="masonry-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="masonry-grid">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="masonry-item"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="masonry-image"
            />
            <div className="item-overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
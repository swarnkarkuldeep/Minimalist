import { useState, useEffect } from 'react';
import { portfolioItems } from '../data/portfolioData';
import './MasonryGrid.css';

const MasonryGrid = () => {
  const [columns, setColumns] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute items into columns
  const distributeItems = () => {
    const columnArray = Array.from({ length: columns }, () => []);
    
    portfolioItems.forEach((item, index) => {
      const columnIndex = index % columns;
      columnArray[columnIndex].push(item);
    });
    
    return columnArray;
  };

  return (
    <div className="masonry-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="masonry-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {distributeItems().map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="masonry-column">
            {column.map((item, itemIndex) => (
              <div 
                key={item.id} 
                className="masonry-item"
                style={{ 
                  aspectRatio: item.aspectRatio 
                }}
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
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import { categories } from '../data/categories';
import './CategoryPage.css';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const decodedCategory = decodeURIComponent(category || '');
  const filteredItems = portfolioItems.filter(item => item.category === decodedCategory);
  const otherCategories = categories.filter(cat => cat.name !== decodedCategory);

  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const showPrev = modalIndex !== null && modalIndex > 0;
  const showNext = modalIndex !== null && modalIndex < filteredItems.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="category-container">
      <div className="category-content">
        <div className="category-header">
          <button onClick={() => navigate('/')} className="back-button">
            <span className="back-arrow">←</span> Back to Categories
          </button>
          <h1 className="category-title">{decodedCategory}</h1>
        </div>

        <div className="masonry-grid">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="masonry-item" onClick={() => openModal(idx)}>
              <img src={item.imageUrl} alt={item.title} className="masonry-image" />
              <div className="item-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <h2 className="explore-title">Explore More Categories</h2>
        <div className="categories-grid">
          {otherCategories.map(cat => (
            <Link to={`/category/${encodeURIComponent(cat.name)}`} key={cat.id} className="category-item">
              <div className="category-image">
                <img src={cat.coverImage} alt={cat.name} />
              </div>
              <div className="category-info">
                <h2>{cat.name}</h2>
                <p>{cat.count} Photos</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {modalIndex !== null && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <button
            onClick={e => { e.stopPropagation(); setModalIndex(modalIndex - 1); }}
            disabled={!showPrev}
            className="modal-nav-button left"
          >
            &#8592;
          </button>
          <img
            src={filteredItems[modalIndex].imageUrl}
            alt="Large"
            className="modal-image"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={e => { e.stopPropagation(); setModalIndex(modalIndex + 1); }}
            disabled={!showNext}
            className="modal-nav-button right"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

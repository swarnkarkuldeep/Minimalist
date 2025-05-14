import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import { categories } from '../data/categories';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const decodedCategory = decodeURIComponent(category || '');
  const filteredItems = portfolioItems.filter(item => item.category === decodedCategory);

  // Get other categories except the current one
  const otherCategories = categories.filter(cat => cat.name !== decodedCategory);

  // State for modal (use index for easier navigation)
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const showPrev = modalIndex !== null && modalIndex > 0;
  const showNext = modalIndex !== null && modalIndex < filteredItems.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div
      key={category} // <-- Add this line
      className="category-container"
      style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: 32,
          padding: '10px 24px',
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 16,
          color: 'var(--off-white)',
          backgroundColor: 'rgba(30,30,30,0.85)'
        }}
      >
        ← Back to Categories
      </button>
      <h1 className="category-title" style={{ textAlign: 'center', marginBottom: 40 }}>{decodedCategory}</h1>
      <div className="masonry-grid" style={{ marginBottom: 48 }}>
        {filteredItems.map((item, idx) => (
          <div key={item.id} className="masonry-item" style={{ cursor: 'pointer' }} onClick={() => openModal(idx)}>
            <img src={item.imageUrl} alt={item.title} className="masonry-image" />
            <div className="item-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{ textAlign: 'center', margin: '48px 0 24px', fontSize: 28, color: 'var(--off-white)' }}>
        Explore More Categories
      </h2>
      <div
        className="categories-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          marginBottom: 32
        }}
      >
        {otherCategories.map(cat => (
          <Link
            to={`/category/${encodeURIComponent(cat.name)}`}
            key={cat.id}
            className="category-item"
            style={{
              position: 'relative',
              aspectRatio: '16/9',
              overflow: 'hidden',
              borderRadius: 10,
              textDecoration: 'none',
              color: 'inherit',
              background: '#181818'
            }}
          >
            <div className="category-image" style={{ width: '100%', height: '100%' }}>
              <img
                src={cat.coverImage}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  transition: 'transform 0.5s'
                }}
              />
            </div>
            <div
              className="category-info"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: 20,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
              }}
            >
              <h2 style={{ margin: 0, color: 'var(--off-white)', fontSize: 20 }}>{cat.name}</h2>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: 14 }}>{cat.count} Photos</p>
            </div>
          </Link>
        ))}
      </div>
      {modalIndex !== null && (
        <div
          className="image-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            animation: 'fadeInModal 0.3s'
          }}
          onClick={closeModal}
        >
          <button
            onClick={e => { e.stopPropagation(); setModalIndex(modalIndex - 1); }}
            disabled={!showPrev}
            style={{
              position: 'absolute',
              left: 40,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 32,
              background: 'none',
              border: 'none',
              color: showPrev ? 'var(--off-white)' : '#555',
              cursor: showPrev ? 'pointer' : 'not-allowed',
              zIndex: 10000,
              opacity: showPrev ? 1 : 0.5
            }}
          >
            &#8592;
          </button>
          <img
            src={filteredItems[modalIndex].imageUrl}
            alt="Large"
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: 12,
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              animation: 'zoomInModal 0.3s'
            }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={e => { e.stopPropagation(); setModalIndex(modalIndex + 1); }}
            disabled={!showNext}
            style={{
              position: 'absolute',
              right: 40,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 32,
              background: 'none',
              border: 'none',
              color: showNext ? 'var(--off-white)' : '#555',
              cursor: showNext ? 'pointer' : 'not-allowed',
              zIndex: 10000,
              opacity: showNext ? 1 : 0.5
            }}
          >
            &#8594;
          </button>
        </div>
      )}
      <style>
        {`
          @keyframes fadeInModal {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomInModal {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default CategoryPage;
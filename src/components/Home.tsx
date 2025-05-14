import './Home.css';
import MasonryGrid from './MasonryGrid';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Your Name</h1>
        <p className="hero-subtitle">Minimalist Portfolio & Creative Showcase</p>
      </section>
      <section className="portfolio-section">
        <MasonryGrid />
      </section>
    </div>
  );
};

export default Home;
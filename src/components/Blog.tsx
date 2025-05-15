import './Blog.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Black and White Photography",
    date: "March 15, 2025",
    excerpt: "Exploring the timeless appeal of monochromatic imagery and its impact on modern photography.",
    imageUrl: "/gallery/blog/a.jpeg",
    category: "Photography"
  },
  {
    id: 2,
    title: "Urban Architecture: Capturing City Landscapes",
    date: "March 10, 2025",
    excerpt: "A deep dive into capturing the essence of city structures and their geometric patterns.",
    imageUrl: "/gallery/blog/b.jpeg",
    category: "Architecture"
  },
  {
    id: 3,
    title: "Minimalism in Photography: Less is More",
    date: "March 5, 2025",
    excerpt: "How less becomes more in contemporary photographic composition.",
    imageUrl: "/gallery/blog/c.jpeg",
    category: "Design"
  },
  {
    id: 4,
    title: "Landscape Photography: Nature's Grand Canvas",
    date: "April 2, 2025",
    excerpt: "Exploring the vast beauty of natural landscapes through the photographic lens.",
    imageUrl: "/gallery/blog/d.jpeg",
    category: "Nature"
  },
  {
    id: 5,
    title: "Street Photography: Urban Human Narratives",
    date: "April 15, 2025",
    excerpt: "Capturing spontaneous moments of urban human experience.",
    imageUrl: "/gallery/blog/e.jpeg",
    category: "Documentary"
  },
  {
    id: 6,
    title: "Night Photography: Illuminating Darkness",
    date: "May 1, 2025",
    excerpt: "Capturing the mysterious world that emerges after sunset.",
    imageUrl: "/gallery/blog/f.jpeg",
    category: "Technique"
  },
  {
    id: 7,
    title: "Macro Photography: Unveiling Microscopic Worlds",
    date: "May 15, 2025",
    excerpt: "Exploring intricate details invisible to the naked eye.",
    imageUrl: "/gallery/blog/g.jpeg",
    category: "Technique"
  }
];

const Blog = () => {
  return (
    <motion.div 
      className="blog-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="blog-title">Blog</h1>
      <motion.div 
        className="blog-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{ borderRadius: 12, overflow: "hidden" }}
          >
            <Link
              to={`/blog/${post.id}`}
              className="blog-post-card"
              onClick={(e) => {
                console.log('Blog post clicked:', post.id);
                console.log('Navigating to:', `/blog/${post.id}`);
              }}
            >
              <div className="post-image-container">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="post-image"
                />
                <span className="post-category">{post.category}</span>
              </div>
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="post-date">{post.date}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
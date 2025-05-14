import { useState } from 'react';
import './Blog.css';

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
    imageUrl: "https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Photography"
  },
  {
    id: 2,
    title: "Urban Architecture Through the Lens",
    date: "March 10, 2025",
    excerpt: "A deep dive into capturing the essence of city structures and their geometric patterns.",
    imageUrl: "https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Architecture"
  },
  {
    id: 3,
    title: "Minimalism in Modern Photography",
    date: "March 5, 2025",
    excerpt: "How less becomes more in contemporary photographic composition.",
    imageUrl: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Design"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="blog-post"
            onClick={() => setSelectedPost(post)}
          >
            <div className="post-image-container">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="post-image"
              />
            </div>
            <div className="post-content">
              <span className="post-category">{post.category}</span>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-date">{post.date}</span>
            </div>
          </article>
        ))}
      </div>

      {selectedPost && (
        <div className="post-modal" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedPost.imageUrl} 
              alt={selectedPost.title} 
              className="modal-image"
            />
            <div className="modal-text">
              <span className="modal-category">{selectedPost.category}</span>
              <h2 className="modal-title">{selectedPost.title}</h2>
              <span className="modal-date">{selectedPost.date}</span>
              <p className="modal-excerpt">{selectedPost.excerpt}</p>
            </div>
            <button 
              className="modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
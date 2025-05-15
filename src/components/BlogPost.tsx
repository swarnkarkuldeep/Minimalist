import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "The Art of Black and White Photography",
    date: "March 15, 2025",
    excerpt: "Exploring the timeless appeal of monochromatic imagery and its impact on modern photography.",
    imageUrl: "/gallery/blog/a.jpeg",
    category: "Photography",
    content: `Black and white photography is more than a stylistic choice—it's a way of seeing the world. By removing color, we are left with the raw interplay of light and shadow, texture and form. This approach forces both the photographer and the viewer to focus on the essence of the subject.

Over the decades, masters like Ansel Adams and Henri Cartier-Bresson have shown how monochrome images can evoke powerful emotions and timeless stories. The absence of color invites us to notice subtle details: the wrinkles in a weathered hand, the dramatic contrast of sunlight on city streets, or the gentle gradation of tones in a misty landscape.

To create compelling black and white photographs, pay close attention to lighting. Side lighting can reveal texture, while backlighting can create striking silhouettes. High contrast scenes often work best, but don't overlook the beauty of soft, low-contrast moments. In post-processing, experiment with adjusting the tonal range to emphasize the mood you want to convey.

Ultimately, black and white photography is about distilling a scene to its most expressive elements. It challenges us to look beyond the obvious and discover the poetry in simplicity—a timeless invitation to see the world anew.`
  },
  {
    id: 2,
    title: "Urban Architecture: Capturing City Landscapes",
    date: "March 10, 2025",
    excerpt: "A deep dive into capturing the essence of city structures and their geometric patterns.",
    imageUrl: "/gallery/blog/b.jpeg",
    category: "Architecture",
    content: `Urban architecture photography is about more than just buildings—it's about the stories cities tell through their structures. Every city has its own rhythm, expressed in the lines of its skyscrapers, the curves of its bridges, and the patterns of its windows.

Photographing architecture means looking for symmetry, repetition, and contrast. Early morning or late afternoon light can cast dramatic shadows, while reflections in glass or puddles add another layer of interest. Wide-angle lenses help capture the scale of a city, but don't be afraid to zoom in on details that reveal the character of a place.

Great architectural photos often include people, showing how we interact with the spaces we've built. Whether it's a lone figure dwarfed by a massive facade or a crowd flowing through a busy station, these moments bring life to the geometry of the city.

In the end, urban architecture photography is about finding beauty in the everyday and capturing the ever-changing face of our built environment.`
  },
  {
    id: 3,
    title: "Minimalism in Photography: Less is More",
    date: "March 5, 2025",
    excerpt: "How less becomes more in contemporary photographic composition.",
    imageUrl: "/gallery/blog/c.jpeg",
    category: "Design",
    content: `Minimalist photography is about stripping away distractions to reveal the essence of a subject. It's a practice rooted in simplicity, where every element in the frame serves a purpose.

A minimalist image might feature a single object against a vast expanse of negative space, or a simple pattern highlighted by gentle light. The challenge is to see the extraordinary in the ordinary—to notice the play of shadow on a wall, the curve of a leaf, or the symmetry of a staircase.

This style encourages mindfulness, inviting both photographer and viewer to slow down and appreciate subtle details. By focusing on shape, color, and composition, minimalist photography creates images that are both calming and powerful.

In a world full of visual noise, minimalism offers a breath of fresh air—a reminder that sometimes, less truly is more.`
  },
  {
    id: 4,
    title: "Landscape Photography: Nature's Grand Canvas",
    date: "April 2, 2025",
    excerpt: "Exploring the vast beauty of natural landscapes through the photographic lens.",
    imageUrl: "/gallery/blog/d.jpeg",
    category: "Nature",
    content: `Landscape photography is a celebration of the natural world, capturing the grandeur of mountains, the serenity of lakes, and the drama of changing skies. It's about being present in the moment—waiting for the perfect light, the right cloud, or the sudden appearance of wildlife.

Successful landscape photographers study the land, learning how weather, seasons, and time of day affect a scene. They use leading lines, foreground interest, and layers to create depth and invite the viewer into the image.

Patience is key. Sometimes the best shot comes after hours of waiting, or from returning to the same spot again and again. And while technical skills matter—knowing how to use filters, tripods, and exposure settings—the most important ingredient is a sense of wonder.

Landscape photography reminds us of our connection to the earth and the importance of preserving its beauty for future generations.`
  },
  {
    id: 5,
    title: "Street Photography: Urban Human Narratives",
    date: "April 15, 2025",
    excerpt: "Capturing spontaneous moments of urban human experience.",
    imageUrl: "/gallery/blog/e.jpeg",
    category: "Documentary",
    content: `Street photography is about capturing life as it happens—unposed, unscripted, and often unexpected. The city is a stage, and every passerby is a potential subject in a fleeting story.

The best street photographers are observers, blending into the background and waiting for the decisive moment: a glance, a gesture, a juxtaposition of strangers. Light and shadow play a crucial role, as do reflections, patterns, and the chaos of urban life.

Ethics matter. Always respect your subjects, and be mindful of privacy and cultural sensitivities. Sometimes a smile or a nod is all it takes to connect with someone before or after taking their photo.

Street photography is a visual diary of humanity, revealing the humor, drama, and poetry of everyday existence in the city.`
  },
  {
    id: 6,
    title: "Night Photography: Illuminating Darkness",
    date: "May 1, 2025",
    excerpt: "Capturing the mysterious world that emerges after sunset.",
    imageUrl: "/gallery/blog/f.jpeg",
    category: "Technique",
    content: `Night photography transforms familiar places into scenes of mystery and magic. When the sun goes down, city lights, neon signs, and starry skies become the palette for creative exploration.

Long exposures reveal details invisible to the naked eye—light trails from passing cars, the glow of distant buildings, or the swirl of stars across the sky. A sturdy tripod and manual settings are essential for sharp, well-exposed images.

Experiment with white balance to capture the mood of artificial lighting, and don't be afraid to embrace noise or blur for artistic effect. Night photography is as much about atmosphere as it is about clarity.

Above all, shooting at night encourages us to see the world differently, finding beauty in the shadows and stories in the darkness.`
  },
  {
    id: 7,
    title: "Macro Photography: Unveiling Microscopic Worlds",
    date: "May 15, 2025",
    excerpt: "Exploring intricate details invisible to the naked eye.",
    imageUrl: "/gallery/blog/g.jpeg",
    category: "Technique",
    content: `Macro photography opens up a universe of detail, revealing patterns and textures hidden from everyday view. From the delicate veins of a leaf to the compound eyes of an insect, the world at close range is full of surprises.

Achieving sharp, detailed macro images requires patience and precision. Use a dedicated macro lens, steady your camera with a tripod, and experiment with focus stacking to increase depth of field. Lighting is critical—natural light works well, but sometimes a ring flash or reflector is needed to highlight tiny features.

Macro photography is both scientific and artistic. It invites us to explore, to notice, and to marvel at the complexity of life on a miniature scale. Each image is a reminder that beauty exists in the smallest corners of our world.`
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="blogpost-wrapper">
        <p className="blogpost-not-found">Post not found.</p>
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <motion.div
      className="blogpost-wrapper"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="blogpost-content">
        <div className="blogpost-header">
          <img src={post.imageUrl} alt={post.title} className="blogpost-image" />
          <div className="blogpost-text">
            <h1 className="blogpost-title">{post.title}</h1>
            <p className="blogpost-meta">{post.date} • {post.category}</p>
          </div>
        </div>
        <div className="blogpost-body">
          {post.content.split('\n\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </motion.div>
  );
};

export default BlogPost;
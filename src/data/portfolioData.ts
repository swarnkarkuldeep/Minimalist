export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Urban Geometry",
    category: "Architecture",
    imageUrl: "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "3/4" // Taller
  },
  {
    id: 2,
    title: "Silhouettes",
    category: "Street",
    imageUrl: "https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "1/1" // Square
  },
  {
    id: 3,
    title: "Reflections",
    category: "Abstract",
    imageUrl: "https://images.pexels.com/photos/2929911/pexels-photo-2929911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "16/9" // Wider
  },
  {
    id: 4,
    title: "Empty Spaces",
    category: "Conceptual",
    imageUrl: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "3/2" // Standard
  },
  {
    id: 5,
    title: "Shadows",
    category: "Fine Art",
    imageUrl: "https://images.pexels.com/photos/2873510/pexels-photo-2873510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "2/3" // Taller
  },
  {
    id: 6,
    title: "Architectural Lines",
    category: "Architecture",
    imageUrl: "https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "4/5" // Nearly square
  },
  {
    id: 7,
    title: "Urban Portrait",
    category: "Portrait",
    imageUrl: "https://images.pexels.com/photos/896059/pexels-photo-896059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "3/4" // Taller
  },
  {
    id: 8,
    title: "Abstract Perspective",
    category: "Abstract",
    imageUrl: "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "16/9" // Wider
  },
  {
    id: 9,
    title: "Minimalist Form",
    category: "Fine Art",
    imageUrl: "https://images.pexels.com/photos/4429277/pexels-photo-4429277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "1/1" // Square
  },
  {
    id: 10,
    title: "Urban Solitude",
    category: "Street",
    imageUrl: "https://images.pexels.com/photos/6056773/pexels-photo-6056773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "3/2" // Standard
  },
  {
    id: 11,
    title: "Patterns & Shapes",
    category: "Abstract",
    imageUrl: "https://images.pexels.com/photos/2387319/pexels-photo-2387319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "4/3" // Slightly taller
  },
  {
    id: 12,
    title: "Negative Space",
    category: "Conceptual",
    imageUrl: "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    aspectRatio: "5/4" // Nearly square
  }
];
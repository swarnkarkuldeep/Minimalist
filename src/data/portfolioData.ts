export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Contemplation",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-ag-z-1866835-3483778.jpg"
  },
  {
    id: 2,
    title: "Urban",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-barcelos_fotos-1484908-2859616.jpg"
  },
  {
    id: 3,
    title: "Profile",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-davdkuko-2743754.jpg"
  },
  {
    id: 4,
    title: "Elegance",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-mayaramombellifotografias-32055563.jpg"
  },
  {
    id: 5,
    title: "Intensity",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-nazar-aslan-443954785-32070231.jpg"
  },
  {
    id: 6,
    title: "Reflection",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-omer-faruk-bener-2151883953-31992257.jpg"
  },
  {
    id: 7,
    title: "Silence",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-rezapix1-32057431.jpg"
  },
  {
    id: 8,
    title: "Stillness",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-sahar-photography-914616632-32025953.jpg"
  },
  {
    id: 9,
    title: "Presence",
    category: "Portrait",
    imageUrl: "/gallery/portrait/pexels-victor-koonoo-462525669-32074575.jpg"
  }
];
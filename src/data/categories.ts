export interface Category {
  id: string;
  name: string;
  count: number;
  coverImage: string;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: 'portrait',
    name: 'Portrait',
    count: 12,
    coverImage: '/cover/portrait.jpg',
    imageUrl: '/cover/portrait.jpg'
  },
  {
    id: 'cinematic',
    name: 'Cinematic',
    count: 8,
    coverImage: '/cover/cinematic.jpg',
    imageUrl: '/cover/cinematic.jpg'
  },
  {
    id: 'landscape',
    name: 'Landscape',
    count: 15,
    coverImage: '/cover/landscape.jpg',
    imageUrl: '/cover/landscape.jpg'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    count: 10,
    coverImage: '/cover/architecture.jpg',
    imageUrl: '/cover/architecture.jpg'
  },
  {
    id: 'mockup',
    name: 'Mockup',
    count: 6,
    coverImage: '/cover/mockup.jpg',
    imageUrl: '/cover/mockup.jpg'
  },
  {
    id: 'art',
    name: 'Art',
    count: 9,
    coverImage: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'object',
    name: 'Object',
    count: 7,
    coverImage: '/cover/object.jpg',
    imageUrl: '/cover/object.jpg'
  },
  {
    id: 'sneakers',
    name: 'Sneakers',
    count: 5,
    coverImage: 'https://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'model',
    name: 'Model',
    count: 11,
    coverImage: '/cover/model.jpg',
    imageUrl: '/cover/model.jpg'
  },
  {
    id: 'street',
    name: 'Street',
    count: 13,
    coverImage: '/cover/street.jpg',
    imageUrl: '/cover/street.jpg'
  },
  {
    id: 'abstract',
    name: 'Abstract',
    count: 8,
    coverImage: '/cover/abstract.jpg',
    imageUrl: '/cover/abstract.jpg'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    count: 6,
    coverImage: '/cover/minimal.jpg',
    imageUrl: '/cover/minimal.jpg'
  }
];
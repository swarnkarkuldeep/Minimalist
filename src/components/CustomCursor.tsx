import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

interface CustomCursorProps {
  variant: 'default' | 'hover';
}

const CustomCursor = ({ variant }: CustomCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      height: 30,
      width: 30,
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={variant}
    />
  );
};

export default CustomCursor;
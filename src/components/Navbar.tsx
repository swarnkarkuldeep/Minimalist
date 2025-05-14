import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onEnterHover: () => void;
  onLeaveHover: () => void;
}

const Navbar = ({ activePage, setActivePage, onEnterHover, onLeaveHover }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: '01 About' },
    { id: 'blog', label: '02 Blog' },
    { id: 'contact', label: '03 Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (id: string) => {
    setActivePage(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">MINIMALIST</div>
          <button 
            className="menu-btn"
            onClick={toggleMenu}
            onMouseEnter={onEnterHover}
            onMouseLeave={onLeaveHover}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="menu-items"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    className={`menu-item ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => handleMenuClick(item.id)}
                    onMouseEnter={onEnterHover}
                    onMouseLeave={onLeaveHover}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
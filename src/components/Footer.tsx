import { motion } from 'framer-motion';
import './Footer.css';

interface FooterProps {
  onEnterHover: () => void;
  onLeaveHover: () => void;
}

const Footer = ({ onEnterHover, onLeaveHover }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2025 Minimalist. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <motion.a 
            href="#" 
            onMouseEnter={onEnterHover}
            onMouseLeave={onLeaveHover}
            whileHover={{ opacity: 1 }}
          >
            Instagram
          </motion.a>
          <motion.a 
            href="#" 
            onMouseEnter={onEnterHover}
            onMouseLeave={onLeaveHover}
            whileHover={{ opacity: 1 }}
          >
            Twitter
          </motion.a>
          <motion.a 
            href="#" 
            onMouseEnter={onEnterHover}
            onMouseLeave={onLeaveHover}
            whileHover={{ opacity: 1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
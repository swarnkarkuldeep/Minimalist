import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2025 Minimalist. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <motion.a 
            href="#" 
            whileHover={{ opacity: 1 }}
          >
            Instagram
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ opacity: 1 }}
          >
            Twitter
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ opacity: 1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>LEGAL DISCLAIMER: This website is a personal portfolio project I developed to showcase my photography collection. All photographic content is sourced from Pexels and Pinterest, with full credit to their creators. This project demonstrates my web development skills using React, TypeScript, and custom CSS. All rights to the displayed images remain with their original creators.</p>
      </div>
      <div className="footer-communication">
        <p>COMMUNICATION: In case of any inquiries, collaboration requests, credits/removal requests or professional communication, please reach out via email to kuldeepswarnkar14@gmail.com. I am open to discussing web development projects, potential opportunities, or providing further insights into my work.</p>
      </div>
    </footer>
  );
};

export default Footer;
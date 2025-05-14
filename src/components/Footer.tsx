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
        <p>LEGAL DISCLAIMER: This website is a personal portfolio project developed for demonstration purposes. All photographic content on this website is sourced exclusively from Pexels (https://www.pexels.com/) and Pinterest (https://pinterest.com/), platforms providing high-quality, royalty-free stock photos. Full credit for these images goes to their respective creators and copyright owners on Pexels and Pinterest. No images used herein are original works. This website serves solely to showcase web development skills and is not a commercial photography service. All intellectual property rights for the displayed images remain with their original creators. This project was developed by Kuldeep Swarnkar to demonstrate proficiency in web technologies including React, TypeScript, and Tailwind CSS.</p>
      </div>
      <div className="footer-communication">
        <p>COMMUNICATION: In case of any inquiries, collaboration requests, credits/removal requests or professional communication, please reach out via email to kuldeepswarnkar14@gmail.com. I am open to discussing web development projects, potential opportunities, or providing further insights into my work.</p>
      </div>
    </footer>
  );
};

export default Footer;
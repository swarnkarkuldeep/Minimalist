import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. I will get back to you soon.');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out for collaborations, exhibitions, or simply to discuss photography.
          </p>
          
          <ul className="contact-details">
            <li>
              <Mail size={20} />
              <span>hello@minimalist.com</span>
            </li>
            <li>
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <MapPin size={20} />
              <span>New York, NY</span>
            </li>
          </ul>
          
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Behance</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
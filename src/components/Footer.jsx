import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/certificates', label: 'Certificates' },
    { to: '/contact', label: 'Contact' }
  ];

  const socials = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/shivamchauhan05/' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/shivam-chauhan-85a761349/' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/mr__shivam__thakur__05' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Shivam Chauhan</Link>
          <p>
            Full Stack Developer at Vista Inc, building modern web and mobile
            applications with React, Next.js, Node.js and MongoDB, along with
            AI automation workflows.
          </p>
          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <a href="mailto:chauhanshivam8836@gmail.com">
                chauhanshivam8836@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919520680204">+91 9520680204</a>
            </li>
            <li>Greater Noida, India</li>
            <li>
              <a href="https://companyvista.com" target="_blank" rel="noopener noreferrer">
                Company Vista Inc
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shivam Chauhan. All rights reserved.</p>
        <p>Built with React, Vite &amp; a lot of curiosity.</p>
      </div>
    </footer>
  );
};

export default Footer;

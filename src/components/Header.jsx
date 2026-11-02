import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/certificates', label: 'Certificates' },
    { to: '/contact', label: 'Contact' },
  ];

  const today = new Date()
    .toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
    .toUpperCase();

  return (
    <>
    <header className="masthead">
      <div className="masthead-strip">
        <span>Greater Noida, India</span>
        <span>MERN &amp; Next.js Developer</span>
        <span>Est. 2025</span>
      </div>
      <Link to="/" className="masthead-title" onClick={closeMenu}>
        Shivam Chauhan
      </Link>
    </header>
    <nav className="header">
      <span className="nav-date">{today}</span>      <button
        type="button"
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        id="primary-navigation"
        className={`nav-links ${isOpen ? 'active' : ''}`}
      >
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="nav-cta" onClick={closeMenu}>
        Let's Talk <span aria-hidden="true">&rarr;</span>
      </Link>
      <div
        className={`nav-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </nav>
    </>
  );
};

export default Header;

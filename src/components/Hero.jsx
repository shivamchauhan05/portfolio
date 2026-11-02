import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>Full Stack Developer @ Company Vista Inc</span>
        </div>
        <h1>Hi, I'm <span className="highlight">Shivam</span></h1>
        <p className="hero-subtitle">MERN & Next.js Developer</p>
        <p className="hero-description">
          I design and build scalable full-stack web applications using MongoDB,
          Express.js, React, Node.js and Next.js. At Vista Inc I build company
          websites, customer portals and partner platforms. I also develop
          applications and AI automation workflows that save time and reduce
          manual work.
        </p>
        <div className="hero-points">
          <span>⚡ Fast & Responsive</span>
          <span>📱 Application Development</span>
          <span>🤖 AI Automation</span>
        </div>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">View Projects</Link>
          <button className="btn secondary">Download Resume</button>
          <Link to="/contact" className="btn outline">Hire Me</Link>
        </div>
        <div className="hero-stack">
          <span>Tech Stack:</span>
          <div className="stack-icons">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Next.js</span>
            <span>AI Automation</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        {/* Yahan par profile photo add karo */}
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Shivam Chauhan" className="profile-photo" />
          <div className="photo-frame"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
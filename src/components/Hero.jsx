import React from 'react';
import './Hero.css';
// Tumhari photo import karo
import profilePhoto from '../assets/shiivam-document-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Shivam</span></h1>
        <p className="hero-subtitle">MERN Stack Developer</p>
        <p className="hero-description">
          I build scalable full-stack applications using MongoDB, Express.js, React, and Node.js. 
          Passionate about creating efficient, user-friendly web solutions.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">View Projects</button>
          <button className="btn secondary">Download Resume</button>
          <a href="#contact" className="btn outline">Hire Me</a>
        </div>
        <div className="hero-stack">
          <span>Tech Stack:</span>
          <div className="stack-icons">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React</span>
            <span>Node.js</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        {/* Yahan par profile photo add karo */}
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Your Name" className="profile-photo" />
          <div className="photo-frame"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
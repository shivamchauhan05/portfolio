import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="section-tag">MERN Stack Developer</div>
            <h3>Crafting Digital Experiences with Code</h3>
            
            <div className="about-description">
              <p>
                I'm a passionate <strong>Full Stack Developer</strong> with expertise in the MERN stack. 
                I specialize in building scalable, high-performance web applications that 
                deliver exceptional user experiences and drive business growth.
              </p>
              
              <p>
                My journey in web development started with a curiosity about how things work 
                behind the scenes. Today, I transform complex problems into elegant solutions 
                using modern technologies and best practices.
              </p>

              <div className="development-focus">
                <h4>What I Bring to the Table:</h4>
                <div className="focus-grid">
                  <div className="focus-item">
                    <div className="focus-icon">⚡</div>
                    <div className="focus-content">
                      <h5>Performance</h5>
                      <p>Optimized applications with fast load times and smooth interactions</p>
                    </div>
                  </div>
                  
                  <div className="focus-item">
                    <div className="focus-icon">🔧</div>
                    <div className="focus-content">
                      <h5>Clean Architecture</h5>
                      <p>Scalable code structure following best practices and patterns</p>
                    </div>
                  </div>
                  
                  <div className="focus-item">
                    <div className="focus-icon">🚀</div>
                    <div className="focus-content">
                      <h5>Modern Stack</h5>
                      <p>MERN stack with latest tools and technologies</p>
                    </div>
                  </div>
                  
                  <div className="focus-item">
                    <div className="focus-icon">📱</div>
                    <div className="focus-content">
                      <h5>Responsive Design</h5>
                      <p>Perfect experience across all devices and screen sizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number" data-count="50">10</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number" data-count="2">1</div>
                <div className="stat-label">Years Experience</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number" data-count="30">5</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number" data-count="15">15</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
            
            <div className="tech-stack">
              <h4>My Tech Stack</h4>
              <div className="stack-tags">
                <span className="stack-tag">React.js</span>
                <span className="stack-tag">Node.js</span>
                <span className="stack-tag">Express.js</span>
                <span className="stack-tag">MongoDB</span>
                <span className="stack-tag">JavaScript</span>
                <span className="stack-tag">TypeScript</span>
                <span className="stack-tag">Redux</span>
                <span className="stack-tag">REST APIs</span>
                <span className="stack-tag">JWT</span>
                <span className="stack-tag">Git</span>
                <span className="stack-tag">AWS</span>
                <span className="stack-tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
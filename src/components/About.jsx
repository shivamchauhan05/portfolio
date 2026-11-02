import React from 'react';
import './About.css';

const About = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Started the Development Journey',
      description: 'Began with HTML, CSS and JavaScript, building small projects to understand the fundamentals of the web.'
    },
    {
      year: '2024',
      title: 'Moved into the MERN Stack',
      description: 'Learned React, Node.js, Express and MongoDB, and started building full-stack applications end to end.'
    },
    {
      year: '2025',
      title: 'Joined Company Vista Inc as a Full Stack Developer',
      description: 'Built companyvista.com and startusacompany.com, then developed the my.companyvista.com portal with React, Express and MongoDB.'
    },
    {
      year: '2026',
      title: 'Building Next.js Portals & Mobile Apps',
      description: 'Developed the partners.companyvista.com portal with Next.js and contributed to a companion mobile application.'
    }
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Company Vista Inc',
      period: 'Present',
      type: 'Full-Time',
      points: [
        'Built the companyvista.com and startusacompany.com websites using HTML, CSS and JavaScript.',
        'Developed the my.companyvista.com portal using React, Node.js, Express and MongoDB.',
        'Built the partners.companyvista.com partner portal using Next.js.',
        'Contributed to the development of a companion mobile application for the Vista platform.'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS']
    },
    {
      role: 'Freelance Web Developer',
      company: 'Independent',
      period: 'Freelance',
      type: 'Client Work',
      points: [
        'Designed and delivered responsive websites for clients including thinkyedu.com, msgmic.in and laptechpro.in.',
        'Handled layouts, responsive design, contact flows and deployment for each project.'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ];

  const facts = [
    { label: 'Location', value: 'Greater Noida, India' },
    { label: 'Current Role', value: 'Full Stack Developer' },
    { label: 'Company', value: 'Company Vista Inc' },
    { label: 'Availability', value: 'Freelance & Full-time' }
  ];

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
                I'm a passionate <strong>Full Stack Developer</strong> currently
                working at <strong>Company Vista Inc</strong>, where I build company
                websites, customer portals and partner platforms. I specialize
                in the MERN stack and enjoy creating scalable, high-performance
                web applications that deliver a great user experience. I also
                build applications and AI-powered automation workflows to make
                everyday processes faster and smarter.
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
                <span className="stack-tag">Next.js</span>
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
                <span className="stack-tag">App Development</span>
                <span className="stack-tag">AI Automation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3 className="about-subheading">Experience</h3>
          <div className="experience-list">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h4>{job.role}</h4>
                    <p className="experience-company">{job.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{job.period}</span>
                    <span className="experience-type">{job.type}</span>
                  </div>
                </div>
                <ul className="experience-points">
                  {job.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {job.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-extra">
          <div className="journey">
            <h3 className="about-subheading">My Journey</h3>
            <div className="timeline">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="timeline-item">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-content">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-side">
            <div className="facts-card">
              <h3 className="about-subheading">Quick Facts</h3>
              <ul className="facts-list">
                {facts.map((fact) => (
                  <li key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="beyond-code">
              <h3 className="about-subheading">Beyond Code</h3>
              <p>
                When I am not coding, I enjoy exploring new developer tools,
                reading about system design, and sharing what I learn with the
                developer community. I believe consistency, curiosity and clean
                code are the keys to long-term growth.
              </p>
              <div className="interest-tags">
                <span>Open Source</span>
                <span>System Design</span>
                <span>UI/UX</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
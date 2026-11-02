import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Company Vista Portal',
      type: 'Company Project',
      description: 'A client portal built at Company Vista Inc that brings business services, documents and account information into one secure dashboard.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      features: ['Secure Authentication', 'Business Dashboard', 'Document Management', 'Role-Based Access', 'Responsive UI'],
      live: 'https://my.companyvista.com',
      image: '🏢'
    },
    {
      id: 2,
      title: 'Company Vista Partners Portal',
      type: 'Company Project',
      description: 'A partner-facing portal built with Next.js where partners can manage their accounts, track requests and access resources.',
      technologies: ['Next.js', 'React', 'Node.js', 'REST API'],
      features: ['Partner Onboarding', 'Role-Based Access', 'Partner Dashboard', 'Server-Side Rendering', 'SEO Friendly'],
      live: 'https://partners.companyvista.com',
      image: '🤝'
    },
    {
      id: 3,
      title: 'Company Vista Website',
      type: 'Company Project',
      description: 'The official corporate website for Company Vista Inc, designed to present the company services, process and contact options clearly.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Corporate Landing Page', 'Service Sections', 'Responsive Layout', 'Contact Forms', 'Cross-Browser Support'],
      live: 'https://companyvista.com',
      image: '🌐'
    },
    {
      id: 4,
      title: 'Start USA Company',
      type: 'Company Project',
      description: 'A business formation website that helps entrepreneurs start their company in the USA with clear service packages and guidance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Service Packages', 'Informative Sections', 'Responsive Design', 'Lead Generation', 'Clean Navigation'],
      live: 'https://startusacompany.com',
      image: '🇺🇸'
    },
    {
      id: 5,
      title: 'Company Vista Mobile App',
      type: 'Company Project',
      description: 'A companion mobile application for Company Vista Inc that connects users with the portal and keeps important information accessible on the go.',
      technologies: ['Mobile App', 'REST API'],
      features: ['Secure Login', 'Mobile Dashboard', 'API Integration', 'Responsive Screens', 'Cross-Platform'],
      live: 'https://play.google.com/store/apps/details?id=com.vistaapp&hl=en_IN',
      image: '📱'
    },
    {
      id: 6,
      title: 'ThinkYEdU',
      type: 'Freelance Project',
      description: 'A freelance website built for an education-focused brand, designed to present courses and services in a simple, engaging way.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Course Sections', 'Responsive Layout', 'Modern UI', 'Contact Options', 'SEO Basics'],
      live: 'https://thinkyedu.com',
      image: '🎓'
    },
    {
      id: 7,
      title: 'MSGMIC',
      type: 'Freelance Project',
      description: 'A freelance business website built to showcase products and services with a clean, modern and mobile-friendly design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Product Showcase', 'Responsive Design', 'Modern Layout', 'Contact Forms', 'Fast Loading'],
      live: 'https://msgmic.in',
      image: '🎤'
    },
    {
      id: 8,
      title: 'LapTechPro',
      type: 'Freelance Project',
      description: 'A freelance website for a laptop and tech services business, focused on clear service information and easy enquiry options.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Service Listings', 'Responsive Layout', 'Enquiry Options', 'Clean Navigation', 'Performance Focused'],
      live: 'https://laptechpro.in',
      image: '💻'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects & Experience</h2>
      <p className="projects-intro">
        Real products I have built at Company Vista Inc, along with websites delivered
        for freelance clients. Each project represents hands-on work with
        design, development and deployment.
      </p>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-top">
              <div className="project-icon">{project.image}</div>
              <span className={`project-type ${project.type === 'Freelance Project' ? 'freelance' : ''}`}>
                {project.type}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn live">
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <div>
          <h3>Have an idea in mind?</h3>
          <p>I am always open to building something new and challenging.</p>
        </div>
        <a href="mailto:chauhanshivam8836@gmail.com" className="btn primary">
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default Projects;

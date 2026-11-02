import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHighlights.css';

const HomeHighlights = () => {
  const services = [
    {
      icon: '🖥️',
      title: 'Full-Stack Development',
      description:
        'Complete web applications built with React, Next.js, Node.js, Express and MongoDB, from database design to deployment.',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB']
    },
    {
      icon: '🌐',
      title: 'Business Websites',
      description:
        'Clean, responsive corporate websites like companyvista.com and startusacompany.com that clearly present services and drive leads.',
      tags: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      icon: '🔗',
      title: 'Portals & APIs',
      description:
        'Secure customer and partner portals with role-based access, REST APIs, authentication and smooth dashboards.',
      tags: ['REST API', 'JWT', 'Next.js']
    },
    {
      icon: '📱',
      title: 'Application Development',
      description:
        'Web and mobile applications built end to end, from the first screen to API integration and deployment.',
      tags: ['Applications', 'API Integration', 'Responsive']
    },
    {
      icon: '🤖',
      title: 'AI Automation',
      description:
        'Automating repetitive work with AI-powered workflows, prompt engineering and smart tool integrations.',
      tags: ['AI Automation', 'Prompt Engineering', 'Workflows']
    }
  ];

  const metrics = [
    { value: '8+', label: 'Live Projects' },
    { value: '3+', label: 'Major Portals' },
    { value: '15+', label: 'Technologies' },
    { value: 'Company Vista Inc', label: 'Currently Working' }
  ];

  return (
    <section className="home-highlights">
      <div className="home-services">
        <div className="home-heading">
          <span className="section-tag">Full-Stack Developer</span>
          <h2>What I Do</h2>
          <p>
            I turn ideas into reliable, user-friendly web products. Whether it
            is a new application or improving an existing one, I focus on clean
            code, performance and a great experience for the people using it.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home-motto">
        <span className="motto-label">My Motto</span>
        <div className="motto-lines">
          <p>👑 Rajput by Heritage</p>
          <p>💻 Software Engineer by Passion</p>
          <p>🔥 Driven by Ambition</p>
          <p>🏹 Karna&apos;s Courage, My Inspiration</p>
        </div>
      </div>

      <div className="home-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="home-cta">
        <div>
          <h3>Let us build something great together</h3>
          <p>
            I am available for freelance projects and full-time opportunities.
            Have an idea? Let us talk about it.
          </p>
        </div>
        <div className="home-cta-buttons">
          <Link to="/projects" className="btn primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn outline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;

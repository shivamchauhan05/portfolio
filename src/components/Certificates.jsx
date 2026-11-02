import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2024',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024',
      icon: '🧠'
    },
    {
      id: 3,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2025',
      icon: '⚛️'
    },
    {
      id: 4,
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: '2025',
      icon: '🍃'
    }
  ];

  const pursuing = [
    {
      title: 'AWS Certified Developer - Associate',
      platform: 'Amazon Web Services',
      progress: 60,
      icon: '☁️'
    },
    {
      title: 'Advanced TypeScript',
      platform: 'Frontend Masters',
      progress: 45,
      icon: '🔷'
    },
    {
      title: 'Docker & Kubernetes',
      platform: 'Udemy',
      progress: 30,
      icon: '🐳'
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>Certificates</h2>
        <p className="certificates-intro">
          A collection of certifications and courses that shaped my development
          journey. I believe in continuous learning and regularly update my
          skills with new technologies.
        </p>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-icon">{certificate.icon}</div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="certificate-date">{certificate.date}</p>
            </div>
          ))}
        </div>

        <div className="pursuing-section">
          <h3>Currently Pursuing</h3>
          <div className="pursuing-grid">
            {pursuing.map((item) => (
              <div key={item.title} className="pursuing-card">
                <div className="pursuing-header">
                  <span className="pursuing-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.platform}</p>
                  </div>
                </div>
                <div className="pursuing-progress">
                  <div className="pursuing-bar">
                    <div
                      className="pursuing-fill"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span>{item.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-cta">
          <h3>Always Learning</h3>
          <p>
            Technology never stands still, and neither do I. Every month I set
            aside time to complete a course, read documentation or build
            something outside my comfort zone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

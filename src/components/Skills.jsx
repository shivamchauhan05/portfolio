import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    // Frontend
    { 
      name: 'React.js', 
      level: 90, 
      category: 'frontend', 
      color: '#61DAFB',
      icon: '⚛️',
      description: 'Building dynamic UIs with hooks, context, and modern practices'
    },
    { 
      name: 'Next.js', 
      level: 82, 
      category: 'frontend', 
      color: '#1a1714',
      icon: '▲',
      description: 'Server-side rendering, routing, API routes and production Next.js apps'
    },
    { 
      name: 'JavaScript', 
      level: 88, 
      category: 'frontend', 
      color: '#C9A400',
      icon: '🟨',
      description: 'ES6+, Async/Await, DOM manipulation, Modern JS features'
    },
    { 
      name: 'HTML5/CSS3', 
      level: 85, 
      category: 'frontend', 
      color: '#E34F26',
      icon: '🎨',
      description: 'Semantic HTML, CSS Grid, Flexbox, Responsive design'
    },
    { 
      name: 'Tailwind CSS', 
      level: 80, 
      category: 'frontend', 
      color: '#06B6D4',
      icon: '💨',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    
    // Backend
    { 
      name: 'Node.js', 
      level: 85, 
      category: 'backend', 
      color: '#339933',
      icon: '🟢',
      description: 'Server-side JavaScript, Event-driven architecture'
    },
    { 
      name: 'Express.js', 
      level: 82, 
      category: 'backend', 
      color: '#000000',
      icon: '🚂',
      description: 'Web application framework, RESTful APIs, Middleware'
    },
    { 
      name: 'RESTful APIs', 
      level: 80, 
      category: 'backend', 
      color: '#FF6B6B',
      icon: '🔗',
      description: 'API design, CRUD operations, Authentication'
    },
    { 
      name: 'JWT', 
      level: 78, 
      category: 'backend', 
      color: '#000000',
      icon: '🔐',
      description: 'Token-based authentication, Secure API endpoints'
    },
    
    // Database
    { 
      name: 'MongoDB', 
      level: 80, 
      category: 'database', 
      color: '#47A248',
      icon: '🍃',
      description: 'NoSQL database, Mongoose ODM, Data modeling'
    },
    { 
      name: 'Mongoose', 
      level: 78, 
      category: 'database', 
      color: '#880000',
      icon: '🐘',
      description: 'MongoDB object modeling, Data validation, Middleware'
    },
    { 
      name: 'MySQL', 
      level: 75, 
      category: 'database', 
      color: '#4479A1',
      icon: '🗄️',
      description: 'Relational databases, SQL queries, Database design'
    },
    
    // Tools
    { 
      name: 'Git/GitHub', 
      level: 85, 
      category: 'tools', 
      color: '#F05032',
      icon: '📚',
      description: 'Version control, Collaboration, CI/CD workflows'
    },
    { 
      name: 'Postman', 
      level: 80, 
      category: 'tools', 
      color: '#FF6C37',
      icon: '📬',
      description: 'API testing, Documentation, Automated testing'
    },
    { 
      name: 'VS Code', 
      level: 90, 
      category: 'tools', 
      color: '#007ACC',
      icon: '💻',
      description: 'Code editing, Debugging, Extensions ecosystem'
    },

    // Application Development
    { 
      name: 'Application Development', 
      level: 85, 
      category: 'apps', 
      color: '#38BDF8',
      icon: '📱',
      description: 'Building web and mobile applications from idea to deployment'
    },
    { 
      name: 'API Integration', 
      level: 82, 
      category: 'apps', 
      color: '#22C55E',
      icon: '🔌',
      description: 'Connecting apps with third-party services and internal APIs'
    },

    // AI & Automation
    { 
      name: 'AI Automation', 
      level: 82, 
      category: 'ai', 
      color: '#A855F7',
      icon: '🤖',
      description: 'Automating repetitive workflows with AI tools and APIs'
    },
    { 
      name: 'Prompt Engineering', 
      level: 80, 
      category: 'ai', 
      color: '#F472B6',
      icon: '🧠',
      description: 'Writing effective prompts for reliable AI-powered results'
    },
    { 
      name: 'Workflow Automation', 
      level: 78, 
      category: 'ai', 
      color: '#FACC15',
      icon: '⚙️',
      description: 'Connecting tools and services into automated workflows'
    }
  ];

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development', 
    database: 'Database & Storage',
    tools: 'Tools & Platforms',
    apps: 'Application Development',
    ai: 'AI & Automation'
  };

  const getProficiency = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const learning = [
    { name: 'TypeScript', icon: '🔷', note: 'Strong typing for large React applications' },
    { name: 'GraphQL', icon: '◈', note: 'Flexible APIs and efficient data fetching' },
    { name: 'Docker', icon: '🐳', note: 'Containerizing and deploying applications' },
    { name: 'AWS Basics', icon: '☁️', note: 'Hosting, storage and cloud fundamentals' }
  ];

  const workflow = [
    { step: '01', title: 'Plan', text: 'Understand requirements and map out the architecture before writing code.' },
    { step: '02', title: 'Design', text: 'Create clean, responsive layouts focused on usability and clarity.' },
    { step: '03', title: 'Build', text: 'Develop scalable frontend and backend features with reusable components.' },
    { step: '04', title: 'Ship', text: 'Test, optimize and deploy with performance and maintainability in mind.' }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <p className="skills-intro">
        I work across the full stack, from building responsive interfaces in
        React to designing APIs and data models with Node.js, Express and
        MongoDB. I also build applications and AI-powered automation workflows
        that save time and reduce manual work.
      </p>
      <div className="skills-categories">
        {Object.entries(categories).map(([key, title]) => (
          <div key={key} className="skill-category">
            <h3>{title}</h3>
            <div className="skills-cards-grid">
              {skills
                .filter(skill => skill.category === key)
                .map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-card"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-card-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-proficiency">
                          {getProficiency(skill.level)}
                        </span>
                      </div>
                      <div className="skill-percentage">{skill.level}%</div>
                    </div>
                    
                    <p className="skill-description">{skill.description}</p>
                    
                    <div className="skill-progress-container">
                      <div className="skill-progress-bar">
                        <div 
                          className="skill-progress-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-extra">
        <div className="learning-section">
          <h3>Currently Learning</h3>
          <div className="learning-grid">
            {learning.map((item) => (
              <div key={item.name} className="learning-card">
                <span className="learning-icon">{item.icon}</span>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="workflow-section">
          <h3>How I Work</h3>
          <div className="workflow-grid">
            {workflow.map((item) => (
              <div key={item.step} className="workflow-card">
                <span className="workflow-step">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
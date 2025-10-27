import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce MERN Stack",
      description: "Full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Order Management", "Admin Dashboard"],
      github: "https://github.com/yourusername/ecommerce-mern",
      live: "https://ecommerce-mern.netlify.app",
      image: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      features: ["Real-time Updates", "Team Collaboration", "Drag & Drop", "Progress Charts", "Notifications"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://taskmanager-mern.netlify.app",
      image: "✅"
    },
    {
      id: 3,
      title: "Social Media Platform",
      description: "Social networking site with posts, comments, likes, user profiles, and real-time messaging",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
      features: ["Create Posts", "Like/Comment", "User Profiles", "Real-time Chat", "Image Upload"],
      github: "https://github.com/yourusername/social-media",
      live: "https://social-app-mern.netlify.app",
      image: "👥"
    },
    {
      id: 4,
      title: "Blog Application",
      description: "Full-stack blog platform with rich text editor, categories, tags, and admin panel",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Quill.js", "JWT"],
      features: ["Rich Text Editor", "Categories & Tags", "Search Functionality", "Admin Panel", "Comments System"],
      github: "https://github.com/yourusername/blog-app",
      live: "https://blog-app-mern.netlify.app",
      image: "📝"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>MERN Stack Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.image}</div>
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
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn live">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
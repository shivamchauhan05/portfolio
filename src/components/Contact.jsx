import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // WhatsApp pe message bhejne ka function
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Apna WhatsApp number yahan dalo (country code ke saath without +)
    const phoneNumber = "919520680204"; // Example: 91 (India) + 9876543210
    
    // Professional message template
    const message = `
*🚀 New Message From Portfolio Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🎯 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
*Sent via Portfolio Contact Form*
⏰ *Time:* ${new Date().toLocaleString()}
    `.trim();

    // WhatsApp URL banate hain
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Mobile ya desktop check karte hain
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile pe directly WhatsApp app open hoga
      window.location.href = whatsappUrl;
    } else {
      // Desktop pe new tab mein open hoga
      window.open(whatsappUrl, '_blank');
    }
    
    // Success message
    setTimeout(() => {
      alert('WhatsApp is opening with your message. Please click send to complete.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // Traditional email submission (optional)
  const handleEmailSubmission = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'chauhanshivam8836@gmail.com',
      link: 'mailto:chauhanshivam8836@gmail.com'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+91 9520680204',
      link: 'https://wa.me/919520680204',
      whatsapp: true
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9520680204',
      link: 'tel:+919520680204'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Greater Noida, India',
      link: '#'
    },
    {
      icon: '💼',
      title: 'Freelance',
      value: 'Available',
      link: '#',
      status: 'available'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/shivamchauhan05/',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/shivam-chauhan-85a761349/',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/mr__shivam__thakur__05',
      color: '#e4405f'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">Message me directly on WhatsApp or send an email</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Ready to Work Together?</h3>
              <p>
                I'm currently available for freelance work and full-time opportunities. 
                Prefer quick communication? Message me directly on WhatsApp!
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    className={`contact-item ${item.whatsapp ? 'whatsapp-item' : ''}`}
                    target={item.link !== '#' ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <div className={`contact-icon ${item.whatsapp ? 'whatsapp-icon' : ''}`}>
                      {item.icon}
                    </div>
                    <div className="contact-text">
                      <span className="contact-title">{item.title}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                    {item.status && (
                      <span className={`status ${item.status}`}>{item.status}</span>
                    )}
                  </a>
                ))}
              </div>

              {/* Direct WhatsApp Button */}
              <div className="whatsapp-direct">
                <a 
                  href="https://wa.me/9520680204" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <span className="whatsapp-icon">💬</span>
                  Message Directly on WhatsApp
                </a>
              </div>

              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={sendToWhatsApp}>
              <div className="form-header">
                <h3>Send Message via WhatsApp</h3>
                <p>Fill this form and it will open WhatsApp with your message</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here... It will be sent to my WhatsApp"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn whatsapp-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <span className="whatsapp-icon">💬</span>
                    Send via WhatsApp
                  </>
                )}
              </button>

              {/* Optional: Email submission button */}
              {/* <button 
                type="button" 
                onClick={handleEmailSubmission}
                className="submit-btn email-submit"
              >
                <span className="email-icon">📧</span>
                Send via Email
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
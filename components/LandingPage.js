import React, { useState } from 'react';
import '../LandingPage.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I get started?",
      answer: "Sign up for free, create your profile, and start exploring creative gigs immediately."
    },
    {
      question: "Is there any fee?",
      answer: "Basic membership is completely free. We offer premium plans with additional features."
    },
    {
      question: "How are payments handled?",
      answer: "All transactions are secured through encrypted payment gateways with escrow protection."
    }
  ];

  return (
    <section className="faq">
      <div className="section-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header with Animated Figure and Auth Buttons */}
      <header className="site-header">
        <div className="floating-figure"></div>
        <div className="auth-buttons">
          <button className="auth-button">Sign In</button>
          <button className="auth-button register">Register</button>
        </div>
      </header>
      {/* Hero Section with Animation */}
      <section className="hero">

        <div className="hero-content">
          <div class="animated-tagline">🚀 Empowering Freelancers & Clients Alike</div>
          <h1 className="animated-title">Your Creative Gig Journey Starts Here</h1>
          <h2 class="typing-effect">Connecting Talent with Opportunity...</h2>
          <p className="hero-subtitle animated-subtitle">Connect, create, and thrive in the gig economy</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="section-content">
          <h2>About GigFloww</h2>
          <p className="about-text">
            GigFloww is the premier platform connecting creative professionals with 
            meaningful opportunities. Whether you're a freelancer, artist, or creative 
            entrepreneur, we're here to empower your journey.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-content">
          <h2>Why Choose GigFloww?</h2>
          <div className="features-grid">
            {[["🤖", "Smart Matching", "AI-powered gig matching..."], 
              ["🔒", "Secure Payments", "Protected transactions..."], 
              ["🌐", "Creative Network", "Connect with fellow..."]].map(([icon, title, text], index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="cta">
        <div className="section-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <button className="cta-button">
            Join Now - It's Free!
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
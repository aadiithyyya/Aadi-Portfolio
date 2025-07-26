import React, { useEffect } from 'react';
import './Hero.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const trailContainer = document.createElement('div');
    trailContainer.className = 'cursor-trail-container';
    document.body.appendChild(trailContainer);

    const onMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const target = e.target;
      if (target.closest('.navbar-links a')) {
        cursor.classList.add('cursor-hover-link');
      } else {
        cursor.classList.remove('cursor-hover-link');
      }

      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      trailContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 400);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeChild(cursor);
      document.body.removeChild(trailContainer);
    };
  }, []);

  return (
    <div className="hero-container">
      <video
        className="stars-bg"
        src="/assets/images/aesthic card bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="grain-overlay"></div>

      <div className="hero-card" data-aos="fade-up">
        <div className="hero-left">
          <h1 className="hero-name">Aadithya Ram</h1>
          <p className="hero-role">SDE Intern @ SAP Labs</p>
          <p className="hero-bio">
            Turning my vision into products 🚀 | FullStack + AI ML + Data Science   #Building meaningful projects, one at a time!
          </p>

          <div className="hero-links">
            <a href="/assets/resume/Aadithya-Ram-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn">📄 Resume</a>
            <a href="https://github.com/aadiithyyya" target="_blank" rel="noopener noreferrer" className="hero-btn">💻 GitHub</a>
            <a href="https://linkedin.com/in/aadiithyyya" target="_blank" rel="noopener noreferrer" className="hero-btn">🔗 LinkedIn</a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img src="/assets/images/myimage.jpg" alt="Aadithya Ram" className="hero-img" />
        </div>
      </div>

      {/* Scroll Hint (below card, centered) */}
      <div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  );
};

export default HeroPage;

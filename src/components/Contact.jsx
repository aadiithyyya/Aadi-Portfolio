import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* 🔁 Background Video */}
      <video
        className="contact-bg-video"
        src="/assets/images/contact.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 📦 Content Wrapper */}
      <div className="contact-content">
        <h2>Let’s Connect</h2>

        <div className="contact-info">
          <p>
            <FaEnvelope className="contact-icon" />
            <a href="mailto:ramaadithya5@gmail.com">ramaadithya5@gmail.com</a>
          </p>
          <p>
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/in/aadiithyyya" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/aadiithyyya
            </a>
          </p>
          <p>
            <FaGithub className="contact-icon" />
            <a href="https://github.com/aadiithyyya" target="_blank" rel="noopener noreferrer">
              github.com/aadiithyyya
            </a>
          </p>
          <p>
            <FaMapMarkerAlt className="contact-icon" />
            Bengaluru, India
          </p>
        </div>

        <div className="quick-actions">
          <a href="mailto:ramaadithya5@gmail.com" className="contact-button">
            📧 Email 
          </a>
          <a
            href="https://wa.me/919940674086"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

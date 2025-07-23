import "./Contact.css";

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
          <p><strong>Email:</strong> <a href="mailto:aadithya.ram02@gmail.com">aadithya.ram02@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aadithya-ram" target="_blank" rel="noopener noreferrer">aadithya-ram</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/AadithyaRam" target="_blank" rel="noopener noreferrer">AadithyaRam</a></p>
          <p><strong>Location:</strong> Bengaluru, India</p>
        </div>

        <div className="quick-actions">
          <a href="mailto:aadithya.ram02@gmail.com" className="contact-button">📧 Email Me</a>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="contact-button">💬 WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

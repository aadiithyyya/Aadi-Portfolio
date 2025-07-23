import "./Certifications.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Natural Language Processing with Attention Models",
    org: "DeepLearning.AI",
    issued: "Apr 2025",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Business Intelligence and Analytics",
    org: "NPTEL",
    issued: "Apr 2024",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Natural Language Processing on Google Cloud",
    org: "Google",
    issued: "Apr 2024",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Software Engineering: Software Design and Project Management",
    org: "HKUST",
    issued: "Mar 2024",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "AWS APAC Solutions Architecture - Forage",
    org: "Amazon Web Services",
    issued: "Jan 2024",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "IBM Data Science Specialization",
    org: "IBM",
    issued: "Oct 2023",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Data Visualization: Empowering Business with Insights",
    org: "Tata Group",
    issued: "Aug 2023",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Data Structures",
    org: "UC San Diego",
    issued: "Jun 2023",
    link: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Structured Query Language (SQL)",
    org: "University of Colorado Boulder",
    issued: "Apr 2023",
    link: "https://linkedin.com/in/aadiithyyya",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <video
        className="certifications-bg-video"
              src="/assets/images/aesthic3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="certifications-content">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card" data-aos="fade-up">
              <video
                className="card-bg-video"
                src="/assets/images/aesthic3.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.org}</p>
                <p className="date">{cert.issued}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                  title="View Credential"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
      </div>
    </section>
  );
}

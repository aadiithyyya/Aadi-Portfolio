import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SafeZone – Attendance Checker",
    tech: ["Node.js", "Render", "Vercel", "Web Scraping"],
    desc: "Automated college portal bot with secure backend and one-click frontend sync.",
    github: "https://github.com/aadiithyyya",
    demo: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "HealthEZY – Smart Healthcare App",
    tech: ["React Native", "Firebase", "AWS", "Node.js"],
    desc: "AI-powered mobile platform for diagnostics, IoT monitoring, and emergency alerts.",
    github: "https://github.com/aadiithyyya",
    demo: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "AI Supply Chain Optimizer",
    tech: ["Flask", "TensorFlow", "MongoDB", "Express.js"],
    desc: "ML-based forecasting with live supplier tracking and traffic-optimized logistics.",
    github: "https://github.com/aadiithyyya",
    demo: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Financial Relationship Manager",
    tech: ["React", "GPT-4o", "Streamlit", "PLAID API", "Flask"],
    desc: "Full-stack wealth insights app with real-time transactions and ML analytics.",
    github: "https://github.com/aadiithyyya",
    demo: "https://linkedin.com/in/aadiithyyya",
  },
  {
    title: "Amazon Sales Data Analytics",
    tech: ["Pandas", "ETL", "Matplotlib"],
    desc: "Trend analysis on large-scale Amazon sales data using visual and statistical metrics.",
    github: "https://github.com/aadiithyyya",
  },
  {
    title: "Crop Production Analysis – India",
    tech: ["Python", "GeoData", "Pandas"],
    desc: "Spatio-temporal insights on agricultural yields, seasons, and regions.",
    github: "https://github.com/aadiithyyya",
  },
  {
    title: "EEG-Based Mental State Recognition",
    tech: ["TensorFlow", "EEG Signals", "NeuroSky"],
    desc: "Deep learning on brainwaves to map emotion and cognitive states.",
    github: "https://github.com/aadiithyyya",
  },
  {
    title: "SRMingle – Campus Networking Platform",
    tech: ["Django", "SQLite", "JavaScript"],
    desc: "Prototype for student-driven campus engagement and digital interaction.",
    github: "https://github.com/aadiithyyya",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* 🔁 Background video */}
      <video
        className="projects-bg-video"
        src="/assets/images/aesthetic7.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🧱 Foreground content */}
      <div className="projects-content">
        <h3 className="projects-title">Projects</h3>
        <p className="projects-subtitle">A curated set of my most impactful builds.</p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <video
                className="project-card-bg"
                src="/assets/images/aesthic card bg.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
  <a href={p.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
    <FaGithub className="icon-link" />
  </a>
  {p.demo && (
    <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
  )}
</div>

              </div>
            </div>
          ))}
        </div>
<div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>


      </div>
    </section>
  );
}

import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SafeZone – Attendance Checker",
    tech: ["Node.js", "Render", "Vercel", "Web Scraping"],
    desc: "Automated college portal bot with secure backend and one-click frontend sync.",
    github: "https://github.com/aadiithyyya/SafeZone-Attendance",
    demo: "https://www.linkedin.com/posts/aadiithyyya_safezone-attendance-checker-this-is-activity-7290009516413239296-9tJA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELRxAoBE8S8AMTbFhvzk9ZHWTyMVj7ScPM",
  },
  {
    title: "HealthEZY – Smart Healthcare App",
    tech: ["React Native", "Firebase", "AWS", "Node.js"],
    desc: "AI-powered mobile platform for diagnostics, IoT monitoring, and emergency alerts.",
    github: "https://github.com/aadiithyyya/EY-Techathon-HealthEZY",
    demo: "https://www.linkedin.com/posts/aadiithyyya_eytechathon-healthezy-hackathonexperience-activity-7297650760220057600-GBn0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELRxAoBE8S8AMTbFhvzk9ZHWTyMVj7ScPM",
  },
  {
    title: "VolksNet - AI Supply Chain Optimization & OEM Management",
    tech: ["Flask", "TensorFlow", "MongoDB", "Express.js"],
    desc: "ML-based forecasting with live supplier tracking and traffic-optimized logistics.",
    github: "https://github.com/aadiithyyya/VolksNet-AI-Supply-Chain-and-OEM-Management",
    demo: "https://www.linkedin.com/posts/aadiithyyya_imobilothon2024-hackathon-mobility-activity-7271881174862454784-Rl_L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELRxAoBE8S8AMTbFhvzk9ZHWTyMVj7ScPM",
  },
  {
    title: "CitiFI - Financial AI Relationship Manager",
    tech: ["React", "GPT-4o", "Streamlit", "PLAID API", "Flask"],
    desc: "Full-stack wealth insights app with real-time transactions and ML analytics.",
    github: "https://github.com/aadiithyyya/CitiFI-AI-Fintech-Software-Citibank-Hackathon-2024",
    demo: "https://www.linkedin.com/posts/aadiithyyya_hackathon-fintech-innovation-activity-7249408479587639296-q5aM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELRxAoBE8S8AMTbFhvzk9ZHWTyMVj7ScPM",
  },
   {
    title: "My Fullstack Portfolio - Website",
    tech: ["React", "JS", "Git - Vercel"],
    desc: "Extremely Detailed Portfolio Website built from scratch for myself.",
    github: "https://github.com/aadiithyyya/Aadi-Portfolio",
  },
  {
    title: "SRMingle – Campus Networking Platform",
    tech: ["Django", "SQLite", "HTML/CSS"],
    desc: "Prototype for student-driven campus engagement and digital interaction.",
    github: "https://github.com/aadiithyyya/SRMingle-University-Networking-Platform",
  },
  {
    title: "Conversational AI Chatbot for University Queries",
    tech: ["Django", "DistilBERT", "Websockets", "ML-Python"],
    desc: "Prototype for student-driven campus engagement and digital interaction.",
    github: "https://github.com/aadiithyyya/Conversational-AI-Chatbot-for-University-Queries",
  },
  {
    title: "Amazon Sales Data Analytics",
    tech: ["Pandas", "ETL", "Matplotlib"],
    desc: "Trend analysis on large-scale Amazon sales data using visual and statistical metrics.",
    github: "https://github.com/aadiithyyya/Amazon-Sales-Data-Analytics",
  },
  {
    title: "Crop Production Analysis – India",
    tech: ["Python", "GeoData", "Pandas"],
    desc: "Spatio-temporal insights on agricultural yields, seasons, and regions.",
    github: "https://github.com/aadiithyyya/Crop-Production-Analysis-in-India",
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
    <a href={p.demo} target="_blank" rel="noopener noreferrer">Repo 👉🏻 Demo</a>
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

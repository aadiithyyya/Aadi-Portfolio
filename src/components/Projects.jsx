import "./Projects.css";

const projects = [
  {
    title: "Smart Healthcare App",
    tech: ["React Native", "Firebase", "AWS"],
    desc: "AI-powered health monitoring with real-time alerts.",
  },
  {
    title: "AI Supply Chain Optimizer",
    tech: ["Flask", "TensorFlow", "MongoDB"],
    desc: "Forecasting & optimization for OEM logistics.",
  },
  {
    title: "Financial Relationship Manager",
    tech: ["React", "GPT-4", "Streamlit"],
    desc: "Personalized financial insights using ML & APIs.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* 🔁 Background video */}
      <video
        className="projects-bg-video"
        src="/assets/images/aesthic card bg.mp4"
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
                src="/assets/images/aesthic3.mp4"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

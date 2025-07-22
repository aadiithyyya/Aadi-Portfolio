import "./Experience.css";

const experience = [
  {
    role: "SDE Intern @ SAP Labs",
    time: "Aug 2025 – Present",
    desc: "Working on LLMs and internal tooling in Bangalore.",
  },
  {
    role: "AI Intern @ Acmegrade",
    time: "Dec 2024 – Feb 2025",
    desc: "Developed models using autoencoders, GPT-4, and DL pipelines.",
  },
  {
    role: "Data Analyst Intern @ Unified Mentor",
    time: "June – July 2024",
    desc: "Built analytics dashboards and KPI reports from large data sets.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      {/* 🎥 Background Video */}
      <video
        className="experience-bg-video"
        src="/assets/images/aesthtic card hover.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <h3>{exp.role}</h3>
              <p className="time">{exp.time}</p>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

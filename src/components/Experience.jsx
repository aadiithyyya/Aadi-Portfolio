import "./Experience.css";

const experience = [
  {
    role: "SDE Intern @ SAP Labs",
    time: "Aug 2025 – Present",
    desc: "Starting this August in SAP Bangalore.",
  },
  {
    role: "AI Intern @ Acmegrade",
    time: "Dec 2024 – Feb 2025",
    desc: "Developed models using autoencoders, GPT-4, and DL pipelines.",
  },
  {
    role: "Data Analyst Intern @ Unified Mentor",
    time: "June 2024 – July 2024",
    desc: "Built analytics dashboards and KPI reports from large data sets.",
  },
  {
    role: "Student Scholar",
    time: "September 2019",
    desc: "Acquired 3 Medals @ The World Scholar's Cup 2019 - Global Round in Manila, Philippines.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
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
            <div key={i} className="timeline-item" data-aos="fade-up">
              <div className="timeline-card">
                <video
                  className="card-bg-video"
                  src="/assets/images/aesthic3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="card-content">
                  <h3>{exp.role}</h3>
                  <p className="time">{exp.time}</p>
                  <p>{exp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
      </div>
    </section>
  );
}

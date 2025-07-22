import "./Skills.css";

const skills = ["Python", "React", "Flask", "MongoDB", "TensorFlow", "GPT-4", "Node.js", "SQL"];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-video-wrapper">
        <video
          className="skills-bg-video"
          src="/assets/images/aesthic3.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <span key={i} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

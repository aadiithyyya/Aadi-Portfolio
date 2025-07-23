import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* 🎥 Background Video */}
      <video
        className="about-bg-video"
        src="/assets/images/aesthtic card hover.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="about-content">
        <h2>About Me</h2>
        <p className="about-intro">
          I’m Aadithya — an SDE intern @ SAP who loves building intelligent and beautiful solutions using AI + Full-stack.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <video
              className="card-bg-video"
              src="/assets/images/aesthic3.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <h3>Core Traits</h3>
            <ul>
              <li>Creative Problem Solver</li>
              <li>Fast Learner</li>
              <li>Team-first Mentality</li>
              <li>Detail-oriented</li>
            </ul>
          </div>
          <div className="about-card">
            <video
              className="card-bg-video"
              src="/assets/images/aesthic3.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <h3>Currently...</h3>
            <ul>
              <li>Working on LLMs at SAP</li>
              <li>Building vibe-coded side projects</li>
              <li>Pursuing M.Tech in Data Science</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

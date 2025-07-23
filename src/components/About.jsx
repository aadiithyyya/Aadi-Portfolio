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
          I’m Aadithya — a Full-Stack + AI developer currently interning as an SDE at SAP Labs 🌐. I specialize in crafting immersive, impactful digital experiences powered by machine learning, automation, and clean frontend vibes. My work bridges tech, creativity, and real-world utility — from smart healthcare to fintech and AI chatbots. Always building. Always vibing.
        </p>

        <div className="about-grid">
          {/* CARD 1 */}
          <div className="about-card">
            <video
              className="card-bg-video"
              src="/assets/images/aesthic3.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <h3>Core Skills</h3>
            <ul>
              <li>Creative Problem Solver 🧠</li>
              <li>Fast Learner ⚡</li>
              <li>Team-first Mentality 🤝</li>
              <li>Detail-Oriented 👀</li>
            </ul>
          </div>

          {/* CARD 2 */}
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
              <li> SDE Intern @ SAP Labs 🚀</li>
              <li> Pursuing M.Tech CSE with Data Science @ SRM Institute 👨‍💻</li>
              <li>Building side projects with GPT & React 🛠️</li>
              <li>Prepping for career-level impact</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="about-card">
            <video
              className="card-bg-video"
              src="/assets/images/aesthic3.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <h3>Tech Stack</h3>
            <ul>
              <li>Python, JS, C, SQL, TensorFlow, Flask</li>
              <li> React, React Native, Node.js, MongoDB</li>
              <li> GPT-4o, BERT, Appwrite, PLAID API</li>
              <li> Firebase, Streamlit, OAuth2, Playwright</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="about-card">
            <video
              className="card-bg-video"
              src="/assets/images/aesthic3.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <h3>Highlights</h3>
            <ul>
              <li>Hackathons: Citibank, EY, Volkswagen 🏆 </li>
              <li>Data Projects: Amazon Sales, Crop Analysis</li>
              <li>Apps: HealthEZY, SafeZone, FRM Platform 📱</li>
              <li>From Gen Z perspective to real-world apps</li>
            </ul>
          </div>
        </div>
        <div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
      </div>
    </section>
  );
}

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
          I'm Aadithya — an AI & Data Engineer and current intern at SAP Labs 🌐, working across agentic platforms, LLM orchestration, and scalable data infrastructure. I have a deep enthusiasm for translating complex engineering into real business impact — from productionized enterprise AI systems to full-stack applications.
          I thrive in environments where I can tackle meaningful challenges, grow under expert guidance, and make impactful contributions — all while crafting clean, immersive digital experiences.
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
              <li>Agentic & LLM Systems 🤖</li>
              <li>Data Engineering & Pipelines ⚙️</li>
              <li>Fast Learner & Problem Solver ⚡</li>
              <li>Team-first Mentality 🤝</li>
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
              <li>AI & Data Engineer Intern @ SAP Labs 🚀</li>
              <li>M.Tech Integrated CSE (Data Science) @ SRM Institute 👨‍💻</li>
              <li>IEEE Paper on MCP Framework — Awaiting Publication 📄</li>
              <li>Building side projects across a wide tech stack 🛠️</li>
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
              <li>Python, SQL, JavaScript, FastAPI, Node.js</li>
              <li>LangChain, LangGraph, MCP, Prompt Engineering</li>
              <li>React, Streamlit, PostgreSQL, SAP HANA, MongoDB</li>
              <li>Databricks, Kubernetes, Spark, SAP BTP, Cloud Foundry</li>
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
              <li>SAP Recognition Award (Monetary) — Dec 2025 🏅</li>
              <li>Hackathons: Citibank, Volkswagen (Top 50 National) 🏆</li>
              <li>Projects: MCP Framework, OEM Supply Chain AI 🔬</li>
              <li>World Scholar's Cup — 3 Medals, Manila 🌍</li>
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

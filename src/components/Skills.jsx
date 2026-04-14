import "./Skills.css";

const skills = {
  "Languages & Core": ["Python", "JavaScript", "SQL", "C"],
  "Frameworks & Libraries": ["React", "Node.js", "FastAPI", "Flask", "Streamlit", "LangChain", "LangGraph"],
  "AI / ML / Data Science": ["TensorFlow", "PyTorch", "Scikit-Learn", "LLM Orchestration", "Agentic Architectures", "MCP", "NLP", "Deep Learning", "ARIMA", "Ensemble Methods", "Feature Engineering", "Predictive Modeling", "Computer Vision", "Prompt Engineering"],
  "Databases & Cloud": ["PostgreSQL", "SAP HANA", "MongoDB", "SQL Systems", "Firebase", "SAP BTP", "Cloud Foundry"],
  "APIs & Auth": ["REST APIs", "OAuth 2.0", "GoogleAuth", "PLAID API", "Appwrite"],
  "Tools & Platforms": ["Databricks", "Kubernetes", "Spark", "Git", "Jupyter", "VSCode", "Metabase", "Jira", "Dialogflow", "Google Cloud", "Playwright"]
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-video-wrapper">
        <video
          className="skills-bg-video"
          src="/assets/images/aesthic card bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* 🧱 Foreground content */}
      <div className="projects-content">
        <h3 className="projects-title">Skills</h3>
        <p className="projects-subtitle">A curated set of my core technical skills.</p>


        <div className="skills-category-wrapper">
          {Object.entries(skills).map(([category, skillSet], i) => (
            <div key={i} className="skills-category">
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-grid">
                {skillSet.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
      </div>
    </section>
  );
}

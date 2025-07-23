import "./Skills.css";

const skills = {
  "Languages & Core": ["Python", "JavaScript", "C", "SQL"],
  "Frameworks & Libraries": ["React", "Node.js", "Flask", "Django", "Streamlit", "React Native"],
  "AI / ML / Data Science": ["TensorFlow", "PyTorch", "Scikit-Learn", "GPT-4", "BERT", "ARIMA", "NLP", "Deep Learning", "EDA", "Feature Engineering"],
  "Databases & Cloud": ["MongoDB", "Firebase", "AWS S3", "SQLite"],
  "APIs & Auth": ["PLAID API", "Appwrite", "OAuth 2.0", "GoogleAuth", "REST APIs"],
  "Tools & Platforms": ["VSCode", "Jupyter", "GitHub", "XCode", "Dialogflow", "Playwright", "Google Cloud"]
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

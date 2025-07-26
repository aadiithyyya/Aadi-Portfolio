import "./Certifications.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Natural Language Processing with Attention Models",
    org: "DeepLearning.AI",
    issued: "Apr 2025",
    link: "https://www.coursera.org/account/accomplishments/certificate/GJ1K6ZSVEQAZ",
  },
  {
    title: "Business Intelligence and Analytics",
    org: "NPTEL",
    issued: "Apr 2024",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS65S105880062430416535",
  },
  {
    title: "Natural Language Processing on Google Cloud",
    org: "Google",
    issued: "Apr 2024",
    link: "https://www.coursera.org/account/accomplishments/records/B9ZZXGTP7NB3",
  },
  {
    title: "Software Engineering: Software Design and Project Management",
    org: "HKUST",
    issued: "Mar 2024",
    link: "https://www.coursera.org/account/accomplishments/records/2X93T66UGSMY",
  },
  {
    title: "AWS APAC Solutions Architecture - Forage",
    org: "Amazon Web Services",
    issued: "Jan 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_9uYbLQPPMhsvnCuw9_1705941505573_completion_certificate.pdf",
  },
  {
    title: "IBM Data Science Professional Certificate",
    org: "IBM",
    issued: "Oct 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/JZSL2RDN4RMK",
  },
  {
    title: "Data Visualization: Empowering Business with Insights",
    org: "Tata Group",
    issued: "Aug 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata_9uYbLQPPMhsvnCuw9_1705508664879_completion_certificate.pdf",
  },
  {
    title: "Data Structures",
    org: "UC San Diego",
    issued: "Jun 2023",
    link: "https://coursera.org/verify/9M27X3KZYG4N",
  },
  {
    title: "The Structured Query Language (SQL)",
    org: "University of Colorado Boulder",
    issued: "Apr 2023",
    link: "https://coursera.org/verify/BC43PBU65SP3",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <video
        className="certifications-bg-video"
              src="/assets/images/aesthic3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="certifications-content">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card" data-aos="fade-up">
              <video
                className="card-bg-video"
                src="/assets/images/aesthic3.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.org}</p>
                <p className="date">{cert.issued}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                  title="View Credential"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div
        className="scroll-hint"
        data-aos="fade-up"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
      </div>
    </section>
  );
}

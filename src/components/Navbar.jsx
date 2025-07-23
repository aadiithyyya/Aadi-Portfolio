import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const handleNameClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAnimateLogo(true);
    setTimeout(() => setAnimateLogo(false), 2000);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <header className="navbar">
      <video
        className="navbar-bg-video"
        src="/assets/images/aesthic4.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="navbar-content">
        <h1
          className={`navbar-logo ${animateLogo ? "signature-animate" : ""}`}
          onClick={handleNameClick}
        >
          Aadithya Ram
        </h1>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {["about", "projects", "skills", "experience", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={handleLinkClick}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

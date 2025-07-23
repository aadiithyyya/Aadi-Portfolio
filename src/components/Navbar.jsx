import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  const navRef = useRef(null);
  const hamRef = useRef(null);
  const wrapperRef = useRef(null); // 🆕 wrapper for card

  const handleLinkClick = () => setMenuOpen(false);

  const handleNameClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAnimateLogo(true);
    setTimeout(() => setAnimateLogo(false), 2000);
  };

  // 🧠 Close menu if click outside nav, ham, or wrapper
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !navRef.current?.contains(e.target) &&
        !hamRef.current?.contains(e.target) &&
        !wrapperRef.current?.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
          ref={hamRef}
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div
          ref={wrapperRef} // 🆕 assign the wrapper ref
          className={`navbar-links-wrapper ${menuOpen ? "open" : ""}`}
        >
          <nav ref={navRef} className={`navbar-links ${menuOpen ? "open" : ""}`}>
            {["about", "projects", "skills", "experience", "certifications","contact"].map((id) => (
              <a key={id} href={`#${id}`} onClick={handleLinkClick}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

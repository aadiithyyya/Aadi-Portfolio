import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* 🎥 Background video for navbar */}
      <video
        className="navbar-bg-video"
        src="/assets/images/aesthic4.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="navbar-content">
        <h1 className="navbar-logo">Aadithya Ram</h1>
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

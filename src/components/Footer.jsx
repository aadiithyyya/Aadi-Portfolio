import React from "react";

export default function Footer() {
  return (
    <>
      {/* Font Import (Inter via Google Fonts) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Component Styles */}
      <style>{`
        .custom-footer {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          padding: 1.5rem 1rem;
          text-align: center;
          font-size: 0.9rem;
          color: #ccc;
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        }

        .footer-text {
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .footer-name {
          font-weight: 600;
          color: #ffffff;
        }

        .footer-link {
          color: #b794f4;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #e0c3fc;
          text-decoration: underline;
        }
      `}</style>

      <footer className="custom-footer">
        <p className="footer-text">
          © 2025 <span className="footer-name">Aadithya Ram</span> • Vibecoded with React & Tailwind •{" "}
          <a
            href="https://github.com/aadiithyyya"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

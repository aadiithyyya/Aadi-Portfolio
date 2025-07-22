import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CursorGlow = () => {
  useEffect(() => {
  const cursor = document.createElement('div');
  cursor.id = 'cursor-glow';
  document.body.appendChild(cursor);

  Object.assign(cursor.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 30px 8px rgba(0, 255, 255, 0.5)',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.05s ease-out',
    zIndex: 9999,
  });

  const move = (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  window.addEventListener('mousemove', move);
  return () => {
    window.removeEventListener('mousemove', move);
    document.body.removeChild(cursor);
  };
}, []);


  return null;
};

// AOS Init
AOS.init({
  duration: 1000,
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CursorGlow />
    <App />
  </React.StrictMode>
);

reportWebVitals();

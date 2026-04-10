import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import './Portfolio.css';

const photos = [
  '/piyush-photo-2.jpeg',
  '/piyush-photo.jpeg',
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % photos.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-intro">Hi, my name is</p>
          <h1 className="hero-name">Piyush Dixit.</h1>
          <h2 className="hero-tagline">I build things for the web.</h2>
          <p className="hero-description">
            Frontend Developer with 3+ years of experience building high-impact web and mobile
            products. Skilled in <strong style={{ color: 'var(--primary)' }}>React.js</strong>,{' '}
            <strong style={{ color: 'var(--primary)' }}>React Native</strong>,{' '}
            <strong style={{ color: 'var(--primary)' }}>TypeScript</strong>, and AI-assisted
            development workflows — delivering platforms that serve millions of users.
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
            </button>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/piyush-dixit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/piyushdixitindia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://instagram.com/piyushdixit7880/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://facebook.com/piyush.dixit.33671" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img
              src={photos[current]}
              alt="Piyush Dixit"
              className={`hero-photo${fading ? ' fade-out' : ''}`}
            />
            <div className="hero-photo-dots">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`photo-dot${i === current ? ' active' : ''}`}
                  onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import './Portfolio.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://github.com/piyush-dixit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href="https://linkedin.com/in/piyushdixitindia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://instagram.com/piyushdixit7880/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://facebook.com/piyush.dixit.33671"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FiFacebook />
        </a>
      </div>
      <div className="footer-copy">
        <p>Designed &amp; Built by{' '}
          <a
            href="https://linkedin.com/in/piyushdixitindia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Piyush Dixit
          </a>
        </p>
        <p style={{ marginTop: '6px', fontSize: '12px' }}>
          © {new Date().getFullYear()} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Portfolio.css';

function About() {
  return (
    <section id="about">
      <div className="section">
        <h2 className="section-title" data-num="01.">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>Frontend Developer</strong> with 3+ years of experience building
              high-impact web and mobile applications. I specialize in crafting fast, accessible,
              and user-friendly interfaces using modern JavaScript frameworks.
            </p>
            <p>
              I have expertise in <strong>React.js</strong>, <strong>React Native</strong>,{' '}
              <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Redux</strong>, and
              UI libraries such as <strong>Material UI</strong> and <strong>Ant Design</strong>.
              I'm also well-versed in bundling tools like Webpack &amp; Babel, Web Workers, and
              performance optimization techniques.
            </p>
            <p>
              At <strong>Bytepe</strong>, I built the entire website and cross-platform mobile
              app from scratch. Previously at <strong>KreditBee</strong>, I led a Next.js to
              React.js migration that achieved <strong>4x–8x performance gains</strong> and
              improved SEO scores from <strong>72 to 92</strong> on Google PageSpeed Insights —
              all serving a platform with <strong>7 Crore+ customers</strong>.
            </p>
            <p>
              I'm passionate about AI-assisted development workflows and actively use tools like
              GitHub Copilot, Cursor, Claude, and ChatGPT to accelerate delivery without
              compromising quality.
            </p>
          </div>

          <div>
            <div className="about-contact-card" id="contact">
              <h3>Contact Info</h3>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <a href="tel:+916388281013">+91 6388281013</a>
              </div>
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <a href="mailto:dixitpiyush7880@gmail.com">dixitpiyush7880@gmail.com</a>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Noida, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

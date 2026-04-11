import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Portfolio.css';

const projects = [
  {
    title: 'Bytepe.com',
    description:
      'Built the entire bytepe.com website from scratch with full backend integration in just 2 weeks. Includes NBFC loan journey, KYC verification, payment gateways (HDFC, InstaCreD, Razorpay), and onboarding flows.',
    tags: ['React.js', 'TypeScript', 'Redux', 'Razorpay', 'Firebase', 'AI Tools', 'Figma','Next.js'],
    github: null,
    live: 'https://bytepe.com',
  },
  {
    title: 'Bytepe Mobile App',
    description:
      'Cross-platform mobile application for iOS and Android built using React Native from scratch. Features core native functionality, PDP UI, onboarding flows, and payment integrations.',
    tags: ['React Native', 'iOS', 'Android', 'Redux-Saga', 'TypeScript', 'Razorpay', 'Firebase', 'AI Tools', 'Figma'],
    github: null,
    live: null,
  },
  {
    title: 'KreditBee Website',
    description:
      'Migrated KreditBee\'s website from Next.js to React.js, achieving 4x–8x performance improvement on mobile and desktop. Improved SEO score from 72 to 92 on Google PageSpeed Insights through structure and metadata optimizations.',
    tags: ['React.js', 'Next.js', 'SEO', 'Webpack', 'Performance'],
    github: null,
    live: 'https://kreditbee.com',
  },
  {
    title: 'KreditBee App — VKYC Module',
    description:
      'Implemented and optimized the Video KYC module used by over 7 Crore+ customers across Android, iOS, and web platforms. Significantly reduced load times and improved the overall user experience.',
    tags: ['React.js', 'WebRTC', 'Account Aggregator', 'Webpack 5'],
    github: null,
    live: null,
  },
  {
    title: 'Sales Dashboard',
    description:
      'Developed a comprehensive sales dashboard from the ground up using AI tools and prompts, now actively utilized by multiple clients for lead management and analytics.',
    tags: ['React.js', 'Ant Design', 'Redux', 'REST API', 'AI Tools'],
    github: null,
    live: null,
  },
  {
    title: 'Admin Panels — DBL / LAP / TWL',
    description:
      'Built multiple admin panels for KreditBee\'s internal loan products (DBL, LAP, TWL) enabling lead punching and administrative functionalities for internal teams.',
    tags: ['React.js', 'TypeScript', 'Ant Design', 'Redux-Saga'],
    github: null,
    live: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section">
        <h2 className="section-title" data-num="04.">Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <FiFolder className="project-folder" />
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

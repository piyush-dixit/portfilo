import './Portfolio.css';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Bytepe',
    location: 'Noida, India',
    period: 'Aug 2025 – Present',
    points: [
      'Built the new bytepe.com website from scratch to advanced level with full backend integration in just 2 weeks.',
      'Architected and developed the Bytepe mobile application from scratch using React Native, delivering a fully functional cross-platform app for both iOS and Android with core native features.',
      'Leveraged Generative AI prompt-based coding techniques alongside manual development to accelerate feature delivery and maintain high code quality.',
      'Added NBFC flow for the loan journey of users, including complete KYC verification.',
      'Integrated multiple payment gateways — HDFC, InstaCreD, and Razorpay — building end-to-end payment journey and checkout flows.',
      'Developed onboarding flow UI with seamless user experience across web and mobile.',
      'Built and optimized the Product Details Page (PDP) UI with dynamic data rendering and responsive design.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'KreditBee',
    location: 'Bengaluru, India',
    period: 'Aug 2023 – Aug 2025',
    points: [
      'Developed and implemented an income verification flow in React.js with seamless third-party integration using Account Aggregator, integrated across Android, iOS, and web platforms.',
      'Implemented and optimized the VKYC module, significantly reducing load time for an application used by over 7 Crore customers.',
      'Worked on the DBL, LAP, and TWL admin panels to enable lead punching and manage administrative functionalities.',
      'Developed a sales dashboard from the ground up using AI tools and prompts, now actively utilized by multiple clients.',
      'Migrated KreditBee\'s website from Next.js to React.js, improving performance by 4x–8x on mobile and desktop devices.',
      'Improved the website\'s SEO score from 72 to 92 on Google PageSpeed Insights by optimizing structure, metadata, and performance.',
      'Boosted page loading speed by 7% through targeted performance optimizations.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KreditBee',
    location: 'Bengaluru, India',
    period: 'Jan 2023 – Jul 2023',
    points: [
      'Integrated Google Analytics for Firebase to track in-app events and user behavior for real-time insights.',
      'Led codebase migration from v1 to v2, adopting TypeScript, functional components, and React Query for better performance and maintainability.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section">
        <h2 className="section-title" data-num="02.">Where I've Worked</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">@ {exp.company}</div>
              <div className="timeline-location">{exp.location}</div>
              <ul className="timeline-list">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

import './Portfolio.css';

const education = [
  {
    degree: 'B.Tech in Electronics and Communication',
    school: 'International Institute of Information Technology',
    location: 'Bhopal, India',
    year: '2019 – 2023',
    extra: 'CGPA: 7.56',
  },
  {
    degree: 'Intermediate (10+2)',
    school: 'S.V.M Inter College',
    location: 'Unnao, India',
    year: '2017 – 2018',
    extra: null,
  },
  {
    degree: 'High School (10th)',
    school: 'S.V.M Inter College',
    location: 'Unnao, India',
    year: '2015 – 2016',
    extra: null,
  },
];

const achievements = [
  {
    title: 'Delivered bytepe.com in 2 weeks',
    desc: 'Built the entire website end-to-end from scratch with full backend integration in just 2 weeks.',
  },
  {
    title: 'Bytepe Cross-Platform Mobile App',
    desc: 'Built and shipped the Bytepe iOS & Android app using React Native from the ground up.',
  },
  {
    title: '4x–8x Performance Improvement',
    desc: 'Led Next.js to React migration at KreditBee achieving massive performance gains on mobile & desktop.',
  },
  {
    title: 'SEO: 72 → 92',
    desc: 'Improved KreditBee website SEO score from 72 to 92 on Google PageSpeed Insights.',
  },
  {
    title: 'Best Performer Award',
    desc: 'Awarded "Best Performer" at KreditBee for consistent excellence in software development and teamwork.',
  },
  {
    title: 'AI-Powered Development',
    desc: 'Proficiently utilizes GitHub Copilot, Cursor, Claude, and ChatGPT to accelerate workflows.',
  },
];

function Education() {
  return (
    <>
      <section id="education">
        <div className="section">
          <h2 className="section-title" data-num="05.">Education</h2>
          <div className="education-grid">
            {education.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <div className="edu-year">{edu.year}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-location">{edu.location}</div>
                {edu.extra && <span className="edu-cgpa">{edu.extra}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="section" style={{ paddingTop: 0 }}>
          <h2 className="section-title" data-num="06.">Achievements</h2>
          <div className="achievements-list">
            {achievements.map((a) => (
              <div className="achievement-item" key={a.title}>
                <strong>{a.title}</strong>
                {a.desc}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;

import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

const skillCategories = [
  {
    title: 'Core Frontend',
    skills: [
      { name: 'React.js', percent: 95 },
      { name: 'JavaScript (ES6+)', percent: 90 },
      { name: 'TypeScript', percent: 90 },
      { name: 'HTML5', percent: 95 },
      { name: 'CSS3', percent: 93 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Tailwind CSS', percent: 90 },
      { name: 'React Native', percent: 85 },
      { name: 'Next.js', percent: 85 },
      { name: 'Redux / Redux-Saga', percent: 88 },
      { name: 'React Query', percent: 80 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Webpack / Babel', percent: 90 },
      { name: 'Firebase / AWS', percent: 80 },
      { name: 'MongoDB', percent: 85 },
      { name: 'Node.js', percent: 70 },
      { name: 'Git / GitHub', percent: 92 },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'AI Tools (Copilot, Cursor, Claude)', percent: 95 },
      { name: 'OOP Concepts', percent: 90 },
      { name: 'Data Structures & Algorithms', percent: 75 },
      { name: 'Ant Design / Material UI', percent: 95 },
      { name: 'Figma', percent: 80 },
    ],
  },
];

function SkillBar({ name, percent, animate }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill${animate ? ' animate' : ''}`}
          style={{ '--target-width': `${percent}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="section">
        <h2 className="section-title" data-num="03.">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skills-category" key={cat.title}>
              <h3>{cat.title}</h3>
              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percent={skill.percent}
                  animate={animate}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';

const skillGroups = [
  {
    number: '01',
    title: 'Languages & UI',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Redux', 'HTML5', 'CSS3'],
  },
  {
    number: '02',
    title: 'Backend & Data',
    skills: ['C#', 'Node.js', 'Express.js', 'GraphQL', 'SQL Server', 'PostgreSQL', 'Elasticsearch', 'Socket.io'],
  },
  {
    number: '03',
    title: 'Platforms & Practice',
    skills: ['AWS', 'GCP', 'Docker', 'Git', 'OpenAI', 'RAG', 'API Integration', 'Cursor AI'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section section--skills">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading skills-heading">
            <div>
              <span className="section-kicker">Capabilities / Toolkit</span>
              <h2>A practical stack for ambitious products.</h2>
            </div>
            <p>From polished interfaces to the services and data beneath them.</p>
          </div>
        </motion.div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="skill-group"
            >
              <div className="skill-group__title">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}><Asterisk size={13} />{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

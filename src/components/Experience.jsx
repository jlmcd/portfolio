import { motion } from 'framer-motion';
import { ArrowUpRight, Building2 } from 'lucide-react';
import reputationLogo from '../assets/reputation_logo.svg';
import devmountainLogo from '../assets/devmountain_logo.svg';

const experiences = [
  {
    id: 'kuder',
    company: 'Kuder',
    role: 'Software Engineer',
    dates: 'Current role',
    active: true,
    logo: <Building2 size={26} strokeWidth={1.5} aria-hidden="true" />,
    summary: 'Developing career-readiness products across a modern React and TypeScript frontend with C# services and SQL Server data systems.',
    caseStudies: [
      {
        title: 'Full-stack product development',
        challenge: 'Evolving user-facing career tools while working across an established, multi-layer application stack.',
        implementation: 'Building accessible product experiences in React and TypeScript, supported by C# application services and SQL Server.',
        impact: 'Bringing frontend, backend, and data concerns together into clear, maintainable product work.',
        tech: ['React', 'TypeScript', 'C#', 'SQL Server'],
      },
    ],
  },
  {
    id: 'reputation',
    company: 'Reputation (formerly Nuvi)',
    role: 'Software Engineer',
    dates: 'Jan 2020 – 2025',
    logo: <img src={reputationLogo} alt="Reputation" />,
    summary: 'Built data-rich products for brand intelligence, spanning AI-powered discovery, enterprise reporting, and social publishing infrastructure.',
    caseStudies: [
      {
        title: 'AI-Driven Customer Insights',
        challenge: 'Enabling natural language querying across 100k+ customer reviews.',
        implementation: 'Deployed a Retrieval-Augmented Generation (RAG) pipeline using OpenAI APIs and Elasticsearch for vector-based search.',
        impact: 'Transitioned data exploration from manual filtering to conversational AI, drastically reducing analysis time for brand managers.',
        tech: ['AI', 'OpenAI', 'RAG', 'Elasticsearch', 'Node.js'],
      },
      {
        title: 'Enterprise Reporting Overhaul',
        challenge: 'Improving the performance and visual fidelity of a legacy PDF generation and reporting engine.',
        implementation: 'Full-stack overhaul using React and Node.js, optimizing complex data-fetching and rendering logic.',
        impact: 'Significantly improved visual performance and report generation speed for enterprise-level brand monitoring.',
        tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
      },
      {
        title: 'Scalable Social Infrastructure',
        challenge: 'Managing real-time social listening and cross-platform publishing at scale.',
        implementation: 'Engineered a social publishing application with complex API integrations for sentiment tracking and engagement.',
        impact: 'Created a robust, centralized hub for brand engagement and multi-platform data distribution.',
        tech: ['React', 'Node.js', 'GraphQL', 'API Integration', 'PostgreSQL'],
      },
    ],
  },
  {
    id: 'devmountain',
    company: 'DevMountain',
    role: 'Web Program Instructor',
    dates: 'June 2019 – Jan 2020',
    logo: <img src={devmountainLogo} alt="DevMountain" />,
    summary: 'Taught full-stack web development and helped aspiring engineers build the technical judgment and confidence to begin their careers.',
    caseStudies: [
      {
        title: 'Bootcamp Curriculum & Instruction',
        challenge: 'Training aspiring developers in full-stack web development fundamentals within an immersive environment.',
        implementation: 'Planned and delivered curriculum for two concurrent classes, focusing on JavaScript, HTML, CSS, and modern framework architecture.',
        impact: 'Mentored and prepared dozens of students for professional engineering careers through rigorous code reviews and debugging sessions.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Mentorship', 'Curriculum Design'],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section section--experience">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading experience-heading">
            <div>
              <span className="section-kicker">Experience / Selected work</span>
              <h2>Building across the whole product.</h2>
            </div>
            <p>Hands-on engineering, technical problem solving, and close collaboration from interface to infrastructure.</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, expIndex) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: expIndex * 0.08 }}
                className={`experience-entry ${exp.active ? 'experience-entry--active' : ''}`}
              >
                <div className="timeline-rail">
                  <span className="timeline-dot" />
                  <span className="timeline-year">{exp.dates}</span>
                </div>
                <div className="experience-content">
                  <div className="company-header">
                    <div className={`company-logo company-logo--${exp.id}`}>{exp.logo}</div>
                    <div>
                      <div className="company-title-row">
                        <h3>{exp.company}</h3>
                        {exp.active && <span className="current-badge">Now</span>}
                      </div>
                      <p>{exp.role}</p>
                    </div>
                  </div>
                  <p className="experience-summary">{exp.summary}</p>
                  <div className="case-study-list">
                    {exp.caseStudies.map((study, index) => (
                      <motion.div
                        key={study.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.07 }}
                        className="case-study"
                      >
                        <div className="case-study__heading">
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          <h4>{study.title}</h4>
                          <ArrowUpRight size={20} aria-hidden="true" />
                        </div>
                        <div className="case-study__body">
                          <div className="case-study__details">
                            <p><strong>Challenge</strong>{study.challenge}</p>
                            <p><strong>Implementation</strong>{study.implementation}</p>
                            <p><strong>Impact</strong>{study.impact}</p>
                          </div>
                          <div className="tech-list">
                            {study.tech.map((tech) => <span key={tech}>{tech}</span>)}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

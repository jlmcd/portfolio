import { motion } from 'framer-motion';
import reputationLogo from '../assets/reputation_logo.svg';
import devmountainLogo from '../assets/devmountain_logo.svg';

const experiences = [
  {
    id: 'reputation',
    company: 'Reputation (formerly Nuvi)',
    role: 'Software Engineer',
    dates: 'Jan 2020 – Present',
    logo: (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-[6px] shadow-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
      >
        <img src={reputationLogo} alt="Reputation" className="w-full h-full object-contain" />
      </motion.div>
    ),
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
    ]
  },
  {
    id: 'devmountain',
    company: 'DevMountain',
    role: 'Web Program Instructor',
    dates: 'June 2019 – Jan 2020',
    logo: (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-[6px] shadow-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
      >
        <img src={devmountainLogo} alt="DevMountain" className="w-full h-full object-contain" />
      </motion.div>
    ),
    caseStudies: [
      {
        title: 'Bootcamp Curriculum & Instruction',
        challenge: 'Training aspiring developers in full-stack web development fundamentals within an immersive environment.',
        implementation: 'Planned and delivered curriculum for two concurrent classes, focusing on JavaScript, HTML, CSS, and modern framework architecture.',
        impact: 'Mentored and prepared dozens of students for professional engineering careers through rigorous code reviews and debugging sessions.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Mentorship', 'Curriculum Design'],
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-dark/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            Professional Experience
          </h2>

          <div className="space-y-20">
            {experiences.map((exp, expIndex) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: expIndex * 0.1 }}
                className="space-y-8"
              >
                {/* Company Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 ml-2">
                  {exp.logo}
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">
                    {exp.company} <span className="block md:inline font-light text-gray-400 text-lg md:text-2xl mt-1 md:mt-0"><span className="hidden md:inline">|</span> {exp.role} <span className="hidden md:inline">|</span><span className="md:hidden"><br/></span> {exp.dates}</span>
                  </h3>
                </div>

                {/* Case Studies */}
                <div className="space-y-6">
                  {exp.caseStudies.map((study, index) => (
                    <motion.div
                      key={study.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (expIndex * 0.1) + (index * 0.1) }}
                      className="bg-dark/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-colors group"
                    >
                      <div className="flex flex-col gap-4">
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                            {study.title}
                          </h4>
                        </div>
                        
                        <div className="text-gray-300 font-light space-y-3 text-base md:text-lg">
                          <p>
                            <strong className="text-white font-medium">The Challenge:</strong>{' '}
                            {study.challenge}
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-400">
                            <li>
                              <strong className="text-gray-300 font-medium">Implementation:</strong>{' '}
                              {study.implementation}
                            </li>
                            <li>
                              <strong className="text-gray-300 font-medium">Impact:</strong>{' '}
                              {study.impact}
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {study.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

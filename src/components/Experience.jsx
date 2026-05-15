import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'AI-Driven Customer Insights',
    challenge:
      'Enabling natural language querying across 100k+ customer reviews.',
    implementation:
      'Deployed a Retrieval-Augmented Generation (RAG) pipeline using OpenAI APIs and Elasticsearch for vector-based search.',
    impact:
      'Transitioned data exploration from manual filtering to conversational AI, drastically reducing analysis time for brand managers.',
    tech: ['AI', 'OpenAI', 'RAG', 'Elasticsearch', 'Node.js'],
  },
  {
    title: 'Enterprise Reporting Overhaul',
    challenge:
      'Improving the performance and visual fidelity of a legacy PDF generation and reporting engine.',
    implementation:
      'Full-stack overhaul using React and Node.js, optimizing complex data-fetching and rendering logic.',
    impact:
      'Significantly improved visual performance and report generation speed for enterprise-level brand monitoring.',
    tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    title: 'Scalable Social Infrastructure',
    challenge:
      'Managing real-time social listening and cross-platform publishing at scale.',
    implementation:
      'Engineered a social publishing application with complex API integrations for sentiment tracking and engagement.',
    impact:
      'Created a robust, centralized hub for brand engagement and multi-platform data distribution.',
    tech: ['React', 'Node.js', 'GraphQL', 'API Integration', 'PostgreSQL'],
  },
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

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark/50 border border-white/5 rounded-2xl p-8 md:p-12 hover:border-accent/30 transition-colors group"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <div className="text-gray-300 font-light space-y-4 text-lg">
                    <p>
                      <strong className="text-white font-medium">
                        The Challenge:
                      </strong>{' '}
                      {study.challenge}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      <li>
                        <strong className="text-gray-300 font-medium">
                          Implementation:
                        </strong>{' '}
                        {study.implementation}
                      </li>
                      <li>
                        <strong className="text-gray-300 font-medium">
                          Impact:
                        </strong>{' '}
                        {study.impact}
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-4 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20"
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
      </div>
    </section>
  );
};

export default Experience;

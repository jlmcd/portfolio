import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1 Name',
    description:
      'A brief description, e.g., real-time collaboration tool designed to solve specific problems. Built with high performance and scalability in mind.',
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    image: 'https://placehold.co/800x450/1f2937/10b981?text=Project+1',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project 2 Name',
    description:
      'A complex e-commerce backend focusing on Scalability/Performance. Features include secure payments, inventory management, and real-time order tracking.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://placehold.co/800x450/1f2937/10b981?text=Project+2',
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-dark/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            Featured Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark/50 border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-accent/30 transition-colors group"
              >
                <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-accent/50 text-accent hover:bg-accent hover:text-primary transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub Repo
                    </a>
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

export default Projects;

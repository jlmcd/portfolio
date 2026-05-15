import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiRedux, SiExpress, SiJavascript, SiPostgresql, SiSocketdotio } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="w-10 h-10" /> },
  { name: 'Redux', icon: <SiRedux className="w-10 h-10" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-10 h-10" /> },
  { name: 'Express.js', icon: <SiExpress className="w-10 h-10" /> },
  { name: 'HTML5', icon: <FaHtml5 className="w-10 h-10" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="w-10 h-10" /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript className="w-10 h-10" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-10 h-10" /> },
  { name: 'Sass', icon: <FaSass className="w-10 h-10" /> },
  { name: 'Socket.io', icon: <SiSocketdotio className="w-10 h-10" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-primary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium tracking-wide text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

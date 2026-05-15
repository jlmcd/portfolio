import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-dark/20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
            <p>
              I'm a developer who bridges the gap between complex backend logic and intuitive frontend design.
              My approach is user-centric, focused on writing clean, maintainable code for impactful web solutions.
            </p>
            <p>
              With a strong foundation in modern web technologies, I excel at transforming complex problems into elegant, scalable applications. 
              I believe that great software is built on clear communication, continuous learning, and a passion for crafting exceptional digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

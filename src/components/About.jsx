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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed font-light">
            <p>
              I'm a Software Engineer with a creative edge and a track record of
              managing large-scale API integrations and complex data pipelines.
              Originally trained as a musician and theatrical director, I bridge
              the gap between technical architecture and intuitive design by
              bringing a collaborative, detail-oriented mindset to every
              codebase I touch.
            </p>
            <br />
            <p>
              Whether I'm architecting a RAG pipeline or refactoring legacy
              reporting engines, my focus remains on building accessible,
              scalable systems that support real people doing meaningful work. I
              believe that great software—much like a great production—is built
              on clear communication, rigorous logic, and a passion for crafting
              seamless human experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

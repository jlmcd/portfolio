import { motion } from 'framer-motion';
import { Blocks, HeartHandshake, Sparkles } from 'lucide-react';

const strengths = [
  {
    icon: Blocks,
    number: '01',
    title: 'Systems thinking',
    copy: 'I untangle complex integrations, data flows, and legacy code into reliable systems teams can confidently extend.',
  },
  {
    icon: HeartHandshake,
    number: '02',
    title: 'Product empathy',
    copy: 'I keep the person on the other side of the screen in view—from accessibility and performance to the shape of an interaction.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Creative rigor',
    copy: 'A background in music and theatre informs how I collaborate, communicate, and craft experiences with rhythm and intention.',
  },
];

const About = () => {
  return (
    <section id="about" className="section section--about">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">About / Approach</span>
              <h2>Engineering with a creative edge.</h2>
            </div>
            <p>
              I bridge technical architecture and intuitive design with a
              collaborative, detail-oriented mindset. Whether I&rsquo;m architecting
              a RAG pipeline or refactoring a legacy reporting engine, I focus on
              accessible, scalable systems that support meaningful work.
            </p>
          </div>
        </motion.div>

        <div className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.article
                key={strength.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="strength-card"
              >
                <div className="strength-card__top">
                  <Icon size={24} strokeWidth={1.5} />
                  <span>{strength.number}</span>
                </div>
                <h3>{strength.title}</h3>
                <p>{strength.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

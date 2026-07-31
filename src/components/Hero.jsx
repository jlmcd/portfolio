import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2 } from 'lucide-react';
import headshotImage from '../assets/headshot.jpeg';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <div className="eyebrow"><span /> Full-stack software engineer</div>
          <h1>I build software that makes <em>complex work</em> feel clear.</h1>
          <p className="hero-intro">
            I&rsquo;m Jonathan McDonald—a product-minded engineer working across
            React, TypeScript, C#, data, APIs, and AI to create thoughtful tools
            for real people.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="button button--primary">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a href="mailto:jonathan@mcdonald.email" className="button button--text">
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-meta" aria-label="Professional focus">
            <span>01 / Frontend systems</span>
            <span>02 / Data-rich products</span>
            <span>03 / Human-centered UX</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="portrait-column"
        >
          <div className="portrait-frame">
            <img src={headshotImage} alt="Jonathan McDonald" />
            <div className="portrait-label portrait-label--top">
              <Code2 size={16} /> Building at Kuder
            </div>
            <div className="portrait-label portrait-label--bottom">
              Product-minded builder <span className="status-dot" />
            </div>
          </div>
          <p className="portrait-caption">
            <span>Creative practice</span>
            Engineering × music × theatre
          </p>
        </motion.div>
      </div>
      <div className="hero-index" aria-hidden="true">JM / 26</div>
    </section>
  );
};

export default Hero;

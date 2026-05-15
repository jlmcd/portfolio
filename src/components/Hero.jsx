import { motion } from 'framer-motion';
import headshotImage from '../assets/headshot.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Jonathan <br />
            McDonald
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Full-Stack Developer building scalable, user-centric web applications.
          </p>
          <div className="pt-4">
            <a 
              href="#projects"
              className="inline-block bg-accent hover:bg-emerald-600 text-primary font-semibold px-8 py-3 rounded-full transition-colors shadow-lg shadow-accent/20"
            >
              View My Work
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Soft emerald outer glow */}
            <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-110"></div>
            {/* Squircle frame */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-dark/50 flex items-center justify-center">
              <img 
                src={headshotImage} 
                alt="Jonathan McDonald"
                className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

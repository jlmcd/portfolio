import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-primary border-t border-white/5 py-12 px-6"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        <h2 className="text-xl font-medium text-white mb-2">
          Connect & Inquire
        </h2>

        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/jon-mcd"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
          >
            <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/jlmcd"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
          >
            <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">GitHub</span>
          </a>
          <a
            href="mailto:jonathan@mcdonald.email"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Email</span>
          </a>
        </div>

        <div className="mt-4 text-sm text-gray-500 font-light">
          Say Hello:{' '}
          <a
            href="mailto:jonathan@mcdonald.email"
            className="hover:text-accent transition-colors"
          >
            jonathan@mcdonald.email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

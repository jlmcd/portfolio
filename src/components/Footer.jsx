import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <div className="footer-kicker"><span /> Have a project in mind?</div>
        <div className="footer-main">
          <h2>Let&rsquo;s make something <em>useful.</em></h2>
          <a className="footer-email" href="mailto:jonathan@mcdonald.email">
            jonathan@mcdonald.email <ArrowUpRight size={28} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>Jonathan McDonald &copy; {new Date().getFullYear()}</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/jon-mcd" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/jlmcd" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="mailto:jonathan@mcdonald.email"><Mail /> Email</a>
          </div>
          <a href="#top" className="back-to-top">Back to top <span>&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

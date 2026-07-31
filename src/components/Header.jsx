import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="wordmark" aria-label="Jonathan McDonald, back to top">
          <span className="wordmark-mark">JM</span>
          <span className="wordmark-name">Jonathan McDonald</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:jonathan@mcdonald.email">
          Let&rsquo;s talk <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>
      </div>
    </header>
  );
};

export default Header;

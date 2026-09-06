import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import type { IconType } from 'react-icons';

interface Props {
  href: string;
  icon: IconType;
  text: string;
  name: string;
}

const NavBar = ({ links }: { links: Props[] }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 100); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once on mount

  return (
    <div
      className={
        'fixed top-0 inset-x-0 z-50 ' + (scrolling ? 'dark' : 'default')
      }
    >
      <nav id="navbar" className="flex items-center">
        <div className="w-full mx-auto px-3 flex items-center justify-between">
          <a className="text-xl font-semibold py-1" href="/">
            Rui Soares
          </a>
          <button
            className="lg:hidden p-2 border rounded"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          <div
            id="navbarNav"
            className={
              (menuOpen ? 'flex' : 'hidden') +
              ' lg:flex flex-col lg:flex-row w-full lg:w-auto absolute lg:static top-full left-0'
            }
          >
            <ul className="flex flex-col lg:flex-row mx-auto mb-2 lg:mb-0">
              {links.map((item, index) => (
                <li key={index} className="mx-3 lg:mx-5 my-1 list-none">
                  <Link to={item.href} onClick={() => setMenuOpen(false)}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <hr className="divisor w-full" />
    </div>
  );
};

export default NavBar;

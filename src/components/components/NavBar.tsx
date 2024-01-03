import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface Props {
    href: string;
    icon: IconType;
    text: string;
    name: string;
}

const NavBar = ({ links }: { links: Props[] }) => {
    const [scrolling, setScrolling] = useState(false);

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
        <div className={'fixed-top ' + (scrolling ? 'dark' : 'default')}>
            <nav id="navbar" className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Rui Soares
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {links.map((item, index) => (
                                <li key={index} className="nav-item mx-lg-5 mx-3 my-1">
                                    <Link to={item.href}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className="divisor w-100" />
        </div>
    );
};

export default NavBar;

import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {
    items: string[];
    links: string[];
}

const NavBar: React.FC<Props> = ({ items, links }: Props) => {
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
                    <a className="navbar-brand" href="/">
                        Rui Soares
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {items.map((item, index) => (
                                <li key={index} className="list-group-item mx-5">
                                    <Link to={links[index]}>{item}</Link>
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

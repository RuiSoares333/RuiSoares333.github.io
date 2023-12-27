import { FaBars } from "react-icons/fa";

interface Props {
    items: string[];
    links: string[];
}


const NavBar = ({ items, links }: Props) => {
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Rui Soares</a>
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
                                    <a href={links[index]}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

import React from "react";
import { Link } from "react-router-dom";

interface Props {
    items: string[];
    icons: string[];
    links: string[];
}

const Links = ({ items, icons, links }: Props) => {
    return (
        <div id="links">
            <ul className="list-group w-25 mx-auto">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {React.createElement(icons[index])}
                        <Link to={links[index]}>{item}</Link>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Links
import React from "react";

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
                        <a href={links[index]}>{item}</a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Links
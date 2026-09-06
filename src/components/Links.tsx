import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  items: string[];
  icons: string[];
  links: string[];
}

const Links = ({ items, icons, links }: Props) => {
  return (
    <div id="links">
      <ul className="w-1/4 mx-auto divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 px-4 py-2">
            {React.createElement(icons[index])}
            <Link to={links[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;

import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  href: string;
  icon: IconType;
  text: string;
  name: string;
}

interface MyInfoProps {
  links: Props[];
}

const MyInfo: React.FC<MyInfoProps> = ({ links }) => {
  return (
    <div id="my-info" className="relative flex flex-col">
      <img src="Rui Soares Foto Quadrada.jpg" alt="My Github Image" />
      <h5 className="font-bold">Rui Soares</h5>
      <p>
        <b>M.Sc. Software Engineer</b>
      </p>
      <ul className="p-4 flex flex-col w-full">
        {links.map((item, index) => (
          <li key={index} className="my-1 w-full">
            <Link to={item.href} className="flex items-center w-full">
              <item.icon className="mr-4" />
              <b>{item.name}</b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyInfo;

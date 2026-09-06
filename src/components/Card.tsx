import React from 'react';
import { SURFACE_CARD } from '../styles';

interface CardProps {
  color: string;
  title: string;
  description: JSX.Element;
  icon: React.ElementType;
}

const Card = ({ color, title, description, icon: Icon }: CardProps) => {
  return (
    <div
      className={`hobby-card ${SURFACE_CARD}`}
      style={{ borderBottom: `0.3rem solid ${color}` }}
    >
      <div className="hexagon" style={{ background: color }}>
        <Icon className="text-white" />
      </div>
      <div className="p-4 text-center px-1" style={{ marginTop: '2.3rem' }}>
        <h6 className="font-bold">{title}</h6>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;

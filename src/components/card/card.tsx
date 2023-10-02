import "./card.css"
import React from 'react';

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ price, title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p><b>Valor:</b> {price}</p>
    </div>
  );
};

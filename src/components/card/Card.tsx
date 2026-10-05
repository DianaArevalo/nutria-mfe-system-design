import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  ...props
}) => {
  return React.createElement(
    'div',
    { className: 'nutria-card ' + className, ...props },
    children
  );
};

export default Card;

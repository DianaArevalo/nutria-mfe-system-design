import React from 'react';
import './Heading.css';

export type HeadingLevel = 'h1' | 'h2' | 'h3';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'h1',
  children,
  className = '',
  ...props
}) => {
  const Component = level as keyof JSX.IntrinsicElements;
  return React.createElement(
    Component,
    { className: 'nutria-heading ' + 'nutria-heading--' + level + ' ' + className, ...props },
    children
  );
};

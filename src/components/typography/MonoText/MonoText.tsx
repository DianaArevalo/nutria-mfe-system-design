import React from 'react';
import './MonoText.css';

export interface MonoTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'span' | 'code' | 'pre';
}

export const MonoText: React.FC<MonoTextProps> = ({
  children,
  as = 'span',
  className = '',
  ...props
}) => {
  const Component = as as keyof JSX.IntrinsicElements;
  return React.createElement(
    Component,
    { className: 'nutria-mono-text ' + className, ...props },
    children
  );
};

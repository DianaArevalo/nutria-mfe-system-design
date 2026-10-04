import React from 'react';
import './Text.css';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
}

export const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  className = '',
  ...props
}) => {
  const Component = as as keyof JSX.IntrinsicElements;
  return React.createElement(
    Component,
    { className: 'nutria-text ' + className, ...props },
    children
  );
};

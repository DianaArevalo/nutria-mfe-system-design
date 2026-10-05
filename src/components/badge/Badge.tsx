import React from 'react';
import './Badge.css';

export type BadgeVariant = 'success' | 'pending' | 'danger';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'success',
  children,
  className = '',
  ...props
}) => {
  return React.createElement(
    'span',
    { className: 'nutria-badge nutria-badge--' + variant + ' ' + className, ...props },
    children
  );
};

export default Badge;

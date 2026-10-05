import React from 'react';
import './Avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
}

export const getInitials = (name?: string): string => {
  const words = (name ?? '').trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return '';
  }

  const first = words[0].charAt(0);
  const last = words.length > 1 ? words[words.length - 1].charAt(0) : '';

  return (first + last).toUpperCase();
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
  ...props
}) => {
  const initials = getInitials(name);
  const classes = 'nutria-avatar nutria-avatar--' + size + ' ' + className;

  if (src) {
    return React.createElement(
      'span',
      { className: classes, ...props },
      React.createElement('img', {
        className: 'nutria-avatar__image',
        src,
        alt: alt ?? name ?? '',
      })
    );
  }

  const a11y = initials ? { role: 'img', 'aria-label': name || initials } : {};

  return React.createElement(
    'span',
    { className: classes, ...a11y, ...props },
    initials
  );
};

export default Avatar;

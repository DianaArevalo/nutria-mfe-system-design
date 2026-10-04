import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'outline' | 'danger-outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  disabled = false,
  ...props
}) => {
  return React.createElement(
    'button',
    { className: 'nutria-button nutria-button--' + variant + ' ' + className, disabled, ...props },
    children
  );
};

export default Button;

import React from "react";
import "./Input.css";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'>;

export const Input: React.FC<InputProps> = ({
  className = "",
  type = "text",
  ...props
}) => {
  return React.createElement("input", {
    className: "nutria-input " + className,
    type,
    ...props,
  });
};

export default Input;

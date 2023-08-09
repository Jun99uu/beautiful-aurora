import React, { ComponentProps } from "react";
import "./button.scss";

interface Props extends ComponentProps<"button"> {
  children: React.ReactNode;
  size: "small" | "large";
}

export const TestChild = () => {
  return <span>click to copy</span>;
};

const Button = ({ children, size, ...props }: Props) => {
  return (
    <button className={`custom-button ${size}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

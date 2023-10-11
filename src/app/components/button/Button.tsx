import React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
  hoverType: string;
}

const Button: React.FC<ButtonProps> = ({ title, hoverType }) => {
  return <button className={`akata-button ${hoverType}`}>{title}</button>;
};

export default Button;

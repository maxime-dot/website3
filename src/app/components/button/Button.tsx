import React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className="akata-button">{title}</button>;
};

export default Button;

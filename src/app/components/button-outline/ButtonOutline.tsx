import React from "react";
import "./button-outline.scss";

interface ButtonProps {
  title: string;
}

const ButtonOutline: React.FC<ButtonProps> = ({ title }) => {
  return <button className="akata-button-outline">{title}</button>;
};

export default ButtonOutline;

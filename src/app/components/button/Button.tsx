import React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
  hoverType: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, hoverType, onClick }) => {
  return (
    <button className={`akata-button ${hoverType}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

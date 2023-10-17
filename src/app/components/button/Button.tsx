import React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
  hoverType: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  title,
  hoverType,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={`akata-button ${hoverType}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;

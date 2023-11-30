import React from "react";
import "./button.scss";

interface ButtonProps {
  content: string;
  ariaLabel: string;
  hoverType?: "shadowed" | "solid";
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  content,
  hoverType,
  onClick,
  type = "button",
  ariaLabel,
}) => {
  return (
    <button
      className={`akata-button ${hoverType}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;

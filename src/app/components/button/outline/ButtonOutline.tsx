import React from "react";
import "./button-outline.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
  ariaLabel: string;
}

const ButtonOutline: React.FC<ButtonProps> = ({
  title,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      className="akata-button-outline"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonOutline;

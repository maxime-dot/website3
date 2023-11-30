import React from "react";
import "./button-outline.scss";

interface ButtonProps {
  content: string;
  onClick: () => void;
  ariaLabel: string;
  title: string;
}

const ButtonOutline: React.FC<ButtonProps> = ({
  content,
  onClick,
  ariaLabel,
  title,
}) => {
  return (
    <button
      className="akata-button-outline"
      aria-label={ariaLabel}
      onClick={onClick}
      title={title}
    >
      {content}
    </button>
  );
};

export default ButtonOutline;

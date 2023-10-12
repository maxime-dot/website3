import React from "react";
import "./button-outline.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const ButtonOutline: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="akata-button-outline" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonOutline;

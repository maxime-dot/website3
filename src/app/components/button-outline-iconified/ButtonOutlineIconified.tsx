import React from "react";
import "./button-outline-iconified.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  title: string;
}

const ButtonOutlineIconified: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="akata-button-outline">
      {title}{" "}
      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "14px" }} />{" "}
    </button>
  );
};

export default ButtonOutlineIconified;

import React from "react";
import "./button-ca-float.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface FloatButtonProps {
  onClick: () => void;
  ariaLabel: string;
  FontAwesome: IconProp;
}

const ButtonCaFloat: React.FC<FloatButtonProps> = ({
  onClick,
  FontAwesome,
  ariaLabel,
}) => {
  return (
    <button className="btn-float" aria-label={ariaLabel} onClick={onClick}>
      <FontAwesomeIcon icon={FontAwesome} />
    </button>
  );
};
export default ButtonCaFloat;

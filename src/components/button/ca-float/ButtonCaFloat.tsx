"use client";
import React from "react";

import "./button-ca-float.scss";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

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
    <motion.button
      initial={{opacity: 0, x: 100}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.3, delay: 1}}
      className="btn-float"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={FontAwesome} className="btn-icon" />
    </motion.button>
  );
};
export default ButtonCaFloat;

import React from "react";
import "./loading-modal.scss";

const LoadingModal: React.FC = () => {
  const numberOfDots = 5; // Change this to the desired number of dots
  const dots = Array.from({ length: numberOfDots }, (_, index) => (
    <div key={index} className="dot"></div>
  ));

  return (
    <div className="modal-loader fill-view d-flex-center">
      <div className="modal-layer fill-view"></div>
      <div className="loader-indicator d-flex flex-row">{dots}</div>
    </div>
  );
};

export default LoadingModal;

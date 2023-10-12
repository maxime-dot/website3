import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./modal-lets-talk.scss";

interface ModalLetsTalkProps {
  onClose: () => void;
}

const ModalLetsTalk: React.FC<ModalLetsTalkProps> = ({ onClose }) => {
  return (
    <div className="akata-modal d-flex-center">
      <div className="modal-content animate-up">
        <div className="modal-header d-flex flex-col">
          <button
            className="modal-button-close d-flex-center"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} className="close-icon" />
          </button>
          <h1 className="akata-title-medium header-title">
            Submit Your <span>Project</span> Requirements
          </h1>
          <p className="akata-text-medium">
            Send us your project requirements, and we&apos;ll review them
            promptly. We&apos;ll reach out to you later to discuss the details.
            We look forward to working with you!
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default ModalLetsTalk;

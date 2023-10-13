import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./modal-lets-talk.scss";
import Button from "../button/Button";
import ButtonOutline from "../button-outline/ButtonOutline";

interface ModalLetsTalkProps {
  onClose: () => void;
}

const ModalLetsTalk: React.FC<ModalLetsTalkProps> = ({ onClose }) => {
  return (
    <div className="akata-modal d-flex-center">
      <div className="modal-layer" onClick={onClose} />
      <div className="modal-content animate-up d-flex flex-col">
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
        <div className="modal-body">
          <form action="#" className="body-form d-flex flex-col">
            <div className="form-item d-flex flex-col">
              <label htmlFor="full_name" className="akata-text-medium">
                Full name
              </label>
              <FontAwesomeIcon icon={faUser} className="form-icon" />
              <input
                type="text"
                placeholder="ex: Jhon Doe, Lissa Meetson"
                name="full_name"
              />
            </div>
            <div className="form-item d-flex flex-col">
              <label htmlFor="full_name" className="akata-text-medium">
                Email
              </label>
              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
              <input
                type="text"
                placeholder="ex: account.me@goavana.com"
                name="full_name"
                required
              />
            </div>
          </form>
        </div>
        <div className="modal-bottom d-flex flex-row">
          <Button title="Send" hoverType="solid" onClick={onClose} />
          <ButtonOutline title="Abord" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ModalLetsTalk;

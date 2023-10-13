"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import "./modal-lets-talk.scss";
import Button from "../button/Button";
import ButtonOutline from "../button-outline/ButtonOutline";

interface ModalLetsTalkProps {
  onClose: () => void;
}

const services = [
  "UI/UX Design",
  "Consulting",
  "Database Management",
  "Web App Development",
  "Other...",
];

const ModalLetsTalk: React.FC<ModalLetsTalkProps> = ({ onClose }) => {
  const handleFormSubmit = () => {
    console.log("sended");
  };

  const handleEspaceKeyPress = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEspaceKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEspaceKeyPress);
    };
  }, []);

  const handleDropFile = (file) => {
    console.log(file);
  };
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
            {/* request user full name */}
            <div className="form-item d-flex flex-col">
              <label htmlFor="name" className="akata-text-medium">
                Full name
              </label>
              <FontAwesomeIcon icon={faUser} className="form-icon" />
              <input
                type="text"
                placeholder="ex: Jhon Doe, Lissa Meetson"
                name="name"
                required
                className="akata-text-medium"
              />
            </div>

            {/* request user email */}
            <div className="form-item d-flex flex-col">
              <label htmlFor="email" className="akata-text-medium">
                Email
              </label>
              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
              <input
                type="email"
                placeholder="ex: account.me@goavana.com"
                name="email"
                required
                className="akata-text-medium"
              />
            </div>

            {/* request user choice based on services */}
            <div className="form-item d-flex flex-col">
              <label
                htmlFor="selected-services"
                className="akata-text-medium"
              ></label>
              <select
                name="selected-services"
                className="select-area akata-text-medium"
              >
                <option
                  value=""
                  disabled
                  defaultValue="Choose what do you want to talking about."
                >
                  {" "}
                  Choose what do you want to talking about.
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* request user  project brief */}
            <div className="form-item d-flex flex-col send-file">
              <label htmlFor="email" className="akata-text-medium">
                Project brief file:
              </label>
              <Dropzone onDrop={(uploadedFile) => handleDropFile(uploadedFile)}>
                {({ getRootProps, getInputProps }) => (
                  <section className="drop-zone-section">
                    <div
                      {...getRootProps()}
                      className="input-drop d-flex-center flex-col"
                    >
                      <input {...getInputProps()} />
                      <FontAwesomeIcon
                        icon={faFile}
                        className="drop-file-icon"
                      />
                      <p className="akata-text-medium drop-file-indicator">
                        Drag and drop your file here or{" "}
                        <span className="important-text">choose file</span>
                      </p>
                    </div>
                    <div className="file-type-indicator d-flex-space-between">
                      <p className="akata-text-small">
                        Supported format: DOCX, PDF, XLS
                      </p>
                      <p className="akata-text-small">
                        Maximum file size: 40Mb
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>

            {/* call to action button for modal */}
            <div className="modal-action-button d-flex flex-row">
              <Button
                title="Send"
                hoverType="solid"
                onClick={handleFormSubmit}
              />
              <ButtonOutline title="Abord" onClick={onClose} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalLetsTalk;

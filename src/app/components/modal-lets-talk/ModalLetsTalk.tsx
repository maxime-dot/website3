"use client";
import React, { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import { Formik } from "formik";
import "./modal-lets-talk.scss";
import Button from "../button/Button";
import ButtonOutline from "../button-outline/ButtonOutline";
import { TruncateText } from "@/app/helpers/truncate";

interface ModalLetsTalkProps {
  onClose: () => void;
}

const services = [
  "UI/UX Design",
  "Consultation",
  "Database Management",
  "Web App Development",
  "E-commerce & CMS",
  "Mobile Apps",
  "Desktop Applications",
];

const ModalLetsTalk: React.FC<ModalLetsTalkProps> = ({ onClose }) => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };
  const handleDropFile = (files: File[]) => {
    setDroppedFiles([...droppedFiles, ...files]);
    console.log("files: ", droppedFiles);
  };
  const handleRemoveFile = (indexToRemove: number) => {
    setDroppedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div
      className="akata-modal w-100 d-flex-center"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="modal-layer fill-view" onClick={onClose} />
      <div className="modal-content w-100 animate-up d-flex flex-col">
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
        <div className="modal-body w-100">
          <Formik
            initialValues={{
              name: "",
              email: "",
              files: droppedFiles,
              theme: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Ooops!Full name is missing. Please provide it..";
              }
              if (!values.email) {
                errors.email = "Email address is required. Please specify it.";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email =
                  "Invalid email format. Use a valid format (e.g., example@example.com).";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="body-form d-flex flex-col"
              >
                {/* request user full name */}
                <div className="form-item d-flex flex-col">
                  <label htmlFor="name" className="akata-text-medium">
                    Full name
                  </label>
                  <FontAwesomeIcon icon={faUser} className="form-icon" />
                  <input
                    type="text"
                    placeholder="eg: Jhone Doe, Maria Smith,.."
                    name="name"
                    className="akata-text-medium"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    id="name"
                    autoComplete="true"
                  />
                  <p className="akata-text-small error-message">
                    {" "}
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>

                {/* request user email */}
                <div className="form-item d-flex flex-col">
                  <label htmlFor="email" className="akata-text-medium">
                    Email
                  </label>
                  <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="ex: account.me@goavana.com"
                    onBlur={handleBlur}
                    value={values.email}
                    id="email"
                    autoComplete="true"
                  />
                  <p className="akata-text-small error-message">
                    {" "}
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>

                {/* request user choice based on services */}
                <div className="form-item d-flex flex-col">
                  <label htmlFor="theme" className="akata-text-medium">
                    Choose what you want to talk about.
                  </label>
                  <select
                    name="theme"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="select-area akata-text-medium"
                    id="theme"
                  >
                    <option value="" disabled>
                      Choose what you want to talk about.
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* request user project brief */}
                <div className="form-item d-flex flex-col send-file">
                  <label htmlFor="email" className="akata-text-medium">
                    Project brief file:
                  </label>
                  <Dropzone
                    onDrop={(uploadedFile) => handleDropFile(uploadedFile)}
                  >
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
                            Supported formats: DOCX, PDF, XLS
                          </p>
                          <p className="akata-text-small">
                            Maximum file size: 40MB
                          </p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>

                {/* send file content*/}
                <div className="files  w-100 d-flex flex-col">
                  {droppedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="file w-100 d-flex-space-between"
                    >
                      {/* Add content for each dropped file here */}
                      <div className="file-info d-flex animate-up">
                        <div className="info-icon d-flex-center">
                          <FontAwesomeIcon
                            icon={faFile}
                            className="inner-icon"
                          />
                        </div>
                        <div className="info-text d-flex flex-col">
                          <span className="info-text-name akata-text-small">
                            {TruncateText(file.name)}
                          </span>
                          <span className="info-text-taille akata-text-small">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-remove-file d-flex-center"
                        data-index={index}
                        onClick={() => handleRemoveFile(index)}
                      >
                        <FontAwesomeIcon icon={faXmark} className="icon-file" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* call to action button for modal */}
                <div className="modal-action-button d-flex flex-row">
                  <Button
                    title="Send"
                    hoverType="solid"
                    onClick={handleSubmit}
                    type="submit"
                  />
                  {!isSubmitting && (
                    <ButtonOutline title="Abort" onClick={onClose} />
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalLetsTalk;

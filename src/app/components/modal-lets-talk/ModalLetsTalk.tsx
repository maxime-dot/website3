"use client";
import axios from "axios";
import React, {useState, KeyboardEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faUser,
    faEnvelope,
    faFile,
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import {Formik} from "formik";
import {motion, AnimatePresence} from "framer-motion";
import "./modal-lets-talk.scss";
import Button from "../button/normal/Button";
import ButtonOutline from "../button/outline/ButtonOutline";
import {TruncateText} from "@/app/helpers/truncate";
import Image from "next/image";

interface ModalLetsTalkProps {
    onClose: () => void;
}

interface FormValues {
    THEME: string;
    NAME: string;
    EMAIL: string;
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

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

const ModalLetsTalk: React.FC<ModalLetsTalkProps> = ({onClose}) => {
    const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
    const [sendError, setSendError] = useState(false)
    const [sent, setSent] = useState(false)


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

    const toggleSendError = () => {
        setSendError(true)
        setTimeout(() => {
            setSendError(false)
        }, 3000)

    }

    const toogleSend = () => {
        setSent(true)
        setTimeout(() => {
            setSent(false)
        }, 3000)
    }


    return (
        <AnimatePresence>
            <div className="akata-modal w-100 d-flex-center flex-col">
                <div className="modal-layer fill-view" onClick={onClose}/>
                <AnimatePresence>
                    {sent && <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, x: -30}}
                        className={"form-sent d-flex-center flex-col"}>
                        <Image src={"/images/modal/modal-shape-right.png"} alt={"modal-shape"} className={"shape-right"} width={300} height={300} />
                        <Image src={"/images/modal/modal-shape-left.png"} alt={"modal-shape"} className={"shape-left"} width={300} height={300} />
                        <FontAwesomeIcon icon={faCircleCheck} className={"check-icon"}/>
                        <p className={"akata-text-medium"}>Your project brief has been successfully received. We will be
                            in touch soon for the next steps. Thank you!</p>

                        <button className="close-btn" onClick={onClose}>
                            Close
                        </button>
                    </motion.div>}
                </AnimatePresence>
                <AnimatePresence>
                    {!sent && <motion.div
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0}}
                        className="modal-content w-100  d-flex flex-col"
                    >
                        <div className="modal-header d-flex flex-col">
                            <button
                                className="modal-button-close d-flex-center"
                                onClick={onClose}
                            >
                                <FontAwesomeIcon icon={faXmark} className="close-icon"/>
                            </button>
                            <h2 className="akata-title-medium header-title">
                                Submit Your <span>Project</span> Requirements
                            </h2>
                            <p className="akata-text-medium">
                                Send us your project requirements, and we&apos;ll review them
                                promptly. We&apos;ll reach out to you later to discuss the
                                details. We look forward to working with you!
                            </p>
                        </div>
                        <div className="modal-body w-100">
                            <Formik
                                initialValues={{
                                    NAME: "",
                                    EMAIL: "",
                                    THEME: "",
                                    // files: droppedFiles,
                                }}
                                validate={(values) => {
                                    const errors: Partial<FormValues> = {};
                                    if (!values.NAME) {
                                        errors.NAME =
                                            "Ooops!Full name is missing. Please provide it..";
                                    }
                                    if (!values.EMAIL) {
                                        errors.EMAIL =
                                            "Email address is required. Please specify it.";
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.EMAIL)
                                    ) {
                                        errors.EMAIL =
                                            "Invalid email format. Use a valid format (e.g., example@example.com).";
                                    }
                                    return errors;
                                }}
                                onSubmit={async (values, {setSubmitting, resetForm}) => {
                                    try {
                                        const response = await axios.post("/mailchimp/api", {
                                            email_address: values.EMAIL,
                                            status: "subscribed",
                                            merge_fields: {
                                                NAME: values.NAME,
                                                THEME: values.THEME,
                                            },
                                        });

                                        if (response.status === 200) {
                                            toogleSend()
                                            resetForm()
                                        } else {
                                            toggleSendError()
                                        }
                                    } catch (error) {
                                        toggleSendError()
                                        console.error("Error subscribing to Mailchimp:", error);
                                    } finally {
                                        setSubmitting(false);
                                    }
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
                                            <FontAwesomeIcon icon={faUser} className="form-icon"/>
                                            <input
                                                type="text"
                                                placeholder="eg: Jhone Doe, Maria Smith,.."
                                                name="NAME"
                                                className="akata-text-medium"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.NAME}
                                                id="name"
                                                autoComplete="true"
                                            />
                                            <p className="akata-text-small error-message">
                                                {" "}
                                                {errors.NAME && touched.NAME && errors.NAME}
                                            </p>
                                        </div>

                                        {/* request user email */}
                                        <div className="form-item d-flex flex-col">
                                            <label htmlFor="email" className="akata-text-medium">
                                                Email
                                            </label>
                                            <FontAwesomeIcon icon={faEnvelope} className="form-icon"/>
                                            <input
                                                type="email"
                                                name="EMAIL"
                                                onChange={handleChange}
                                                placeholder="ex: account.me@goavana.com"
                                                onBlur={handleBlur}
                                                value={values.EMAIL}
                                                id="email"
                                                autoComplete="true"
                                            />
                                            <p className="akata-text-small error-message">
                                                {" "}
                                                {errors.EMAIL && touched.EMAIL && errors.EMAIL}
                                            </p>
                                        </div>

                                        {/* request user choice based on services */}
                                        <div className="form-item d-flex flex-col">
                                            <label htmlFor="THEME" className="akata-text-medium">
                                                Choose what you want to talk about.
                                            </label>
                                            <select
                                                name="THEME"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="select-area akata-text-medium"
                                                id="THEME"
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
                                        {/*<div className="form-item d-flex flex-col send-file">*/}
                                        {/*  <label htmlFor="email" className="akata-text-medium">*/}
                                        {/*    Project brief file:*/}
                                        {/*  </label>*/}
                                        {/*  <Dropzone*/}
                                        {/*    onDrop={(uploadedFile) => handleDropFile(uploadedFile)}*/}
                                        {/*  >*/}
                                        {/*    {({getRootProps, getInputProps}) => (*/}
                                        {/*      <section className="drop-zone-section">*/}
                                        {/*        <div*/}
                                        {/*          {...getRootProps()}*/}
                                        {/*          className="input-drop d-flex-center flex-col"*/}
                                        {/*        >*/}
                                        {/*          <input {...getInputProps()} />*/}
                                        {/*          <FontAwesomeIcon*/}
                                        {/*            icon={faFile}*/}
                                        {/*            className="drop-file-icon"*/}
                                        {/*          />*/}
                                        {/*          <p className="akata-text-medium drop-file-indicator">*/}
                                        {/*            Drag and drop your file here or{" "}*/}
                                        {/*            <span className="important-text">*/}
                                        {/*              choose file*/}
                                        {/*            </span>*/}
                                        {/*          </p>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="file-type-indicator d-flex-space-between">*/}
                                        {/*          <p className="akata-text-small">*/}
                                        {/*            Supported formats: DOCX, PDF, XLS*/}
                                        {/*          </p>*/}
                                        {/*          <p className="akata-text-small">*/}
                                        {/*            Maximum file size: 40MB*/}
                                        {/*          </p>*/}
                                        {/*        </div>*/}
                                        {/*      </section>*/}
                                        {/*    )}*/}
                                        {/*  </Dropzone>*/}
                                        {/*</div>*/}

                                        {/* send file content*/}
                                        {/*<div className="files  w-100 d-flex flex-col">*/}
                                        {/*  {droppedFiles.map((file, index) => (*/}
                                        {/*    <div*/}
                                        {/*      key={index}*/}
                                        {/*      className="file w-100 d-flex-space-between"*/}
                                        {/*    >*/}
                                        {/*      /!* Add content for each dropped file here *!/*/}
                                        {/*      <div className="file-info d-flex animate-up">*/}
                                        {/*        <div className="info-icon d-flex-center">*/}
                                        {/*          <FontAwesomeIcon*/}
                                        {/*            icon={faFile}*/}
                                        {/*            className="inner-icon"*/}
                                        {/*          />*/}
                                        {/*        </div>*/}
                                        {/*        <div className="info-text d-flex flex-col">*/}
                                        {/*          <span className="info-text-name akata-text-small">*/}
                                        {/*            {TruncateText(file.name)}*/}
                                        {/*          </span>*/}
                                        {/*          <span className="info-text-taille akata-text-small">*/}
                                        {/*            {(file.size / 1024 / 1024).toFixed(2)} MB*/}
                                        {/*          </span>*/}
                                        {/*        </div>*/}
                                        {/*      </div>*/}
                                        {/*      <button*/}
                                        {/*        type="button"*/}
                                        {/*        className="btn-remove-file d-flex-center"*/}
                                        {/*        data-index={index}*/}
                                        {/*        onClick={() => handleRemoveFile(index)}*/}
                                        {/*      >*/}
                                        {/*        <FontAwesomeIcon*/}
                                        {/*          icon={faXmark}*/}
                                        {/*          className="icon-file"*/}
                                        {/*        />*/}
                                        {/*      </button>*/}
                                        {/*    </div>*/}
                                        {/*  ))}*/}
                                        {/*</div>*/}

                                        {/* call to action button for modal */}
                                        <AnimatePresence>
                                            {sendError &&
                                                <motion.div initial={{opacity: 0, x: 30}} animate={{opacity: 1, x: 0}}
                                                            transition={{delay: 0.3}} exit={{opacity: 0}}
                                                            className="error-send-message d-flex-center">
                                                    <span>There is something wrong, please retry later...</span>
                                                </motion.div>}
                                        </AnimatePresence>

                                        {
                                            !sendError && <div
                                                className={
                                                    errors.NAME || errors.EMAIL
                                                        ? "modal-action-button d-none"
                                                        : "modal-action-button d-flex flex-row"
                                                }
                                            >
                                                <Button
                                                    content={isSubmitting ? "Sending..." : "Send"}
                                                    hoverType="solid"
                                                    onClick={handleSubmit}
                                                    type="submit"
                                                    ariaLabel="Send project requirement"
                                                />
                                                {!isSubmitting && (
                                                    <ButtonOutline
                                                        ariaLabel="Abord sending project requirement"
                                                        content="Abord"
                                                        onClick={onClose}
                                                        title="Abord sending project requirement"
                                                    />
                                                )}
                                            </div>
                                        }
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </AnimatePresence>
    );
};

export default React.memo(ModalLetsTalk);

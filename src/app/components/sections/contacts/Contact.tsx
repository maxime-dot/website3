"use client"
import React, {useState} from "react";
import "./contacts.scss";
import {AnimatePresence, motion} from "framer-motion"
import {Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faLightbulb,
    faPaperPlane,
    faMarker,
    faPhone,
    faCircleCheck,
    faExclamationTriangle
    } from "@fortawesome/free-solid-svg-icons";

import Button from "../../button/normal/Button";
import contactData from "../../../data/contacts.json";
import axios from "axios";

interface FormValues {
    NAME: string,
    EMAIL: string,
    THEME: string,
    MESSAGE: string,
    SUBJECT: string
}

const Contacts: React.FC = () => {
    const [submited, setSubmited] = useState(false)
    const [error, setError] = useState(false)
    const toogleSubmit = () => {
        setSubmited(true)
        setTimeout(() => {
            setSubmited(false)
        }, 2000)
    }

    const toogleError = () => {
        setError(false)
        setTimeout(() => {
            setError(false)
        },2000)
    }
    return (
        <section className="akata-contacts fill-view container" id="contacts">
            <div className="contacts form d-flex flex-col">
                <div className="form-title d-flex flex-col">
                    <h2 className="akata-title-medium">
                        Submit Your <span>Project</span> Requirements
                    </h2>
                    <p className="akata-text-medium">
                        Send us your project requirements, and we&apos;ll review them
                        promptly. We&apos;ll reach out to you later to discuss the details.
                        We look forward to working with you!
                    </p>
                </div>
                <div className="form-body d-flex flex-col">
                    <Formik
                        initialValues={{
                            NAME: "",
                            EMAIL: "",
                            THEME: "",
                            MESSAGE: "",
                            SUBJECT: ""
                        }}
                        validate={(values) => {
                            const errors: Partial<FormValues> = {};
                            if (!values.NAME) {
                                errors.NAME = "Ooops!Full name is missing. Please provide it..";
                            }
                            if (!values.EMAIL) {
                                errors.EMAIL = "Email address is required. Please specify it.";
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
                                const response = await axios.post("/send-mail/api", {
                                    EMAIL: values.EMAIL,
                                    SUBJECT: values.SUBJECT,
                                    MESSAGE: values.MESSAGE
                                });

                                if (response.status === 200) {
                                    resetForm()
                                    toogleSubmit()

                                } else {
                                    toogleError()
                                }
                            } catch (error) {
                                    toogleError()
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
                              isSubmitting

                          }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="contact-body d-flex flex-col"
                            >

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
                                        id="NAME"
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
                                        id="EMAIL"
                                        autoComplete="true"
                                        className="akata-text-medium"
                                    />
                                    <p className="akata-text-small error-message">
                                        {" "}
                                        {errors.EMAIL && touched.EMAIL && errors.EMAIL}
                                    </p>
                                </div>
                                <div className="form-item d-flex flex-col">
                                    <label htmlFor="subject" className="akata-text-medium">
                                        Subject
                                    </label>
                                    <FontAwesomeIcon icon={faLightbulb} className="form-icon"/>
                                    <input
                                        type="text"
                                        placeholder="ex: Asking for help, optmiser my website, ..."
                                        name="SUBJECT"
                                        className="akata-text-medium"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.SUBJECT}
                                        id="subject"
                                        autoComplete="true"
                                    />
                                </div>
                                <div className="form-item d-flex flex-col">
                                    <label htmlFor="message" className="akata-text-medium">
                                        Message
                                    </label>
                                    <FontAwesomeIcon icon={faPaperPlane} className="form-icon"/>
                                    <textarea
                                        placeholder="ex: Asking for help, optmiser my website, ..."
                                        name="MESSAGE"
                                        className="akata-text-medium"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.MESSAGE}
                                        id="message"
                                        autoComplete="true"
                                    />
                                </div>
                                <AnimatePresence>
                                    {submited && <motion.div initial={{opacity: 0, x: 30}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -30}}
                                                             className="submit-indicator akata-text-medium d-flex flex-row">
                                        <FontAwesomeIcon icon={faCircleCheck} className={"icon-indicator"}/>

                                        Your project request is submited, thank you and see you soon...

                                    </motion.div>}
                                </AnimatePresence>
                                {error &&  <motion.div initial={{opacity: 0, x: 30}} animate={{opacity: 1, x: 0}}
                                                       className="submit-indicator error akata-text-medium ">
                                    <FontAwesomeIcon icon={faExclamationTriangle} className={"icon-indicator"}/>

                                    There is something wrong, please retry later...

                                </motion.div>}
                                {errors.NAME || errors.EMAIL ? null : (
                                    <Button
                                        ariaLabel="send project requirement"
                                        type="submit"
                                        content={isSubmitting ? "Sending..." : "Send"}
                                        onClick={handleSubmit}
                                        hoverType="solid"
                                    />
                                )}
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="contacts adress d-flex flex-col">
                <div className="adress-map d-flex-center">
                    {/* <Map /> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.3581826809302!2d47.08791706963868!3d-21.451530998769098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bff95fe4d15f%3A0xa014a6be6e4ab6d0!2sAKATA-GOAVANA!5e0!3m2!1sfr!2smg!4v1698663351553!5m2!1sfr!2smg"
                        width="100%"
                        height="361"
                        style={{border: 0}}
                        loading="lazy"
                        title="Akata Goavana position in Maps. "
                    ></iframe>
                </div>
                <ul className="adress-text">
                    <li className="text-item akata-text-medium d-flex ">
                        <FontAwesomeIcon icon={faMarker} className="list-icon"/>{" "}
                        {contactData.adress}
                    </li>
                    <li className="text-item akata-text-medium d-flex">
                        <FontAwesomeIcon icon={faEnvelope} className="list-icon"/>{" "}
                        {contactData.mail}
                    </li>
                    <li className="text-item akata-text-medium d-flex">
                        {" "}
                        <FontAwesomeIcon icon={faPhone} className="list-icon"/>{" "}
                        {contactData.phone}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default React.memo(Contacts);

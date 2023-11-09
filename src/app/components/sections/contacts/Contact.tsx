import React from "react";
import "./contacts.scss";
import {Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faLightbulb,
    faPaperPlane,
    faMarker,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../button/normal/Button";
import contactData from "../../../data/contacts.json";
import ContactInfo from "@/app/components/contact-info/ContactInfo";

interface FormValues {
    name: string;
    email: string;
}

const Contacts: React.FC = () => {
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
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                        }}
                        validate={(values) => {
                            const errors: Partial<FormValues> = {};
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
                        onSubmit={(values) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
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
                                    <FontAwesomeIcon icon={faEnvelope} className="form-icon"/>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="ex: account.me@goavana.com"
                                        onBlur={handleBlur}
                                        value={values.email}
                                        id="email"
                                        autoComplete="true"
                                        className="akata-text-medium"
                                    />
                                    <p className="akata-text-small error-message">
                                        {" "}
                                        {errors.email && touched.email && errors.email}
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
                                        name="subject"
                                        className="akata-text-medium"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subject}
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
                                        name="message"
                                        className="akata-text-medium"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        id="message"
                                        autoComplete="true"
                                    />
                                </div>
                                {errors.email || errors.name ? null : (
                                    <Button
                                        ariaLabel="send project requirement"
                                        type="submit"
                                        content="Send"
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
                    <ContactInfo/>
                </ul>
            </div>
        </section>
    );
};

export default React.memo(Contacts);

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
import contactData from "@/app/data/contacts.json";
import serviceList from "@/app/data/services.json"

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
    return (
        <footer className="akata-footer d-flex-center flex-col" id="footer">
            <div className="footer-element container">
                <div className="footer-content">
                    <strong>Contacts</strong>
                    <ul>
                        <li className="akata-text-small">{contactData.adress}</li>
                        <li className="akata-text-small">
                            <Link href={"mailto:contact-akata@goavana.com"}>
                                {contactData.mail}
                            </Link>
                        </li>
                        <li className="akata-text-small">
                            <Link href={"tel:+261346757384"}>{contactData.phone}</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-content">
                    <strong>Expertise</strong>
                    <ul>
                        {serviceList.map((service, index) => (
                            <li className="akata-text-small" key={`service-${index}`}>
                            <Link href={`#${service.linkId}`}>{service.title}</Link>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="footer-content">
                    <strong>IT Agency</strong>
                    <ul>
                        <li className="akata-text-small">
                            <Link href={"#teams"}>Teams</Link>
                        </li>
                        <li className="akata-text-small">
                            <Link href={"#articles"}>Articles</Link>
                        </li>
                        <li className="akata-text-small">
                            <Link href={"#services"}>Services</Link>
                        </li>
                        <li className="akata-text-small">
                            <Link href={"/#testimonial"}>Customer Testimonial</Link>
                        </li>
                        <li className="akata-text-small">
                            <Link href={"#projects"}>Project</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-content d-flex flex-col">
                    <div className="logo d-flex-center flex-row">
                        <Image
                            src={"/images/footer/logo-akata.png"}
                            alt="Akata's logo"
                            className="logo-akata"
                            width={64}
                            height={64}
                        />
                        <Image
                            src={"/images/footer/logo-goavana.png"}
                            alt="Goavana's logo"
                            className="logo-goavana"
                            width={75}
                            height={79}
                        />
                    </div>
                    <div className="social-link d-flex-center flex-row">
                        <Link href={"/"}>
                            <FontAwesomeIcon icon={faFacebook} className="link-icon"/>
                        </Link>
                        <Link href={"/"}>
                            <FontAwesomeIcon icon={faTwitter} className="link-icon"/>
                        </Link>
                        <Link href={"/"}>
                            <FontAwesomeIcon icon={faLinkedin} className="link-icon"/>
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                src={"/images/footer/shape.svg"}
                alt="bird and grass shape"
                className="footer-shape"
                width={214}
                height={216}
            />
            <Image
                src={"/images/footer/right-shapre.svg"}
                alt="bird and grass shape"
                className="footer-right-shape"
                width={200}
                height={200}
            />
            <span className="akata-text-small">
        Copyright &copy; by Akata Goavana 2020-{currentYear}
      </span>
        </footer>
    );
};
export default Footer;

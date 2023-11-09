import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMarker, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const contactData = {
    "adress": "Rue Rakotozafy Alphonse, Isaha Fianarantsoa Madagascar",
    "mail": "contact-akata@goavana.com",
    "phone": "+261 34 67 573 84"
};

const ContactInfo = () => {
    const contactItems = Object.entries(contactData).map(([key, value], index) => (
        <li key={index} className="text-item akata-text-medium d-flex">
            <FontAwesomeIcon icon={getIcon(key)} className="list-icon"/> {value}
        </li>
    ));

    return <ul className="adress-text">{contactItems}</ul>;
};

const getIcon = (key: string): IconProp => {
    switch (key) {
        case "adress":
            return faMarker;
        case "mail":
            return faEnvelope;
        case "phone":
            return faPhone;
        default:
            return faMarker;
    }
};

export default ContactInfo;

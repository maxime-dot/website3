import dynamic from "next/dynamic";
import "./services-page.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
const Services = dynamic(
  () => import("@/components/sections/services/Services")
);
export default function Page() {
  return (
    <div className="services-page">
      <div className="services-page-return-content container">
        <button className="return-button" type="button">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-btn" /> go back
        </button>
      </div>
      <Services />
    </div>
  );
}

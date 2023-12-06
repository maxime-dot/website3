"use client";
import dynamic from "next/dynamic";
import "./services-page.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/navigation";
import CircularLoader from "@/components/circular-loader/CircularLoader";
const Services = dynamic(
  () => import("@/components/sections/services/Services"),
  {
    loading: () => <CircularLoader />,
  }
);
export default function Page() {
  const router = useRouter();
  return (
    <div className="services-page">
      <div className="services-page-return-content container">
        <button
          className="return-button"
          type="button"
          onClick={() => router.push("/#services")}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="icon-btn" /> go back
        </button>
      </div>

      <Services />
    </div>
  );
}

import dynamic from "next/dynamic";
import "./services-page.scss";
const Services = dynamic(
  () => import("@/components/sections/services/Services")
);
export default function Page() {
  return (
    <div className="services-page">
      <div className="services-page-return-content container">
        <button className="return-button">go back</button>
      </div>
      <Services />
    </div>
  );
}

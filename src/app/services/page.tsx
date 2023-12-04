import dynamic from "next/dynamic";
const Services = dynamic(
  () => import("@/components/sections/services/Services")
);
export default function Page() {
  return (
    <div className="services-page">
      <Services />
    </div>
  );
}

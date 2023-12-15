"use client";
import React from "react";
import "./main-services.scss";
import { LazyMotion, domAnimation, m, motion } from "framer-motion";
import { titleAnimation } from "@/animation/animation";
import ServiceCard from "@/components/services-card/ServiceCard";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faMouse } from "@fortawesome/free-solid-svg-icons";
import ServiceData from "@/data/main-services.json";
import dynamic from "next/dynamic";
import LoadingModal from "@/components/modal-lets-talk/LoadingModal";
import Image from "next/image";

const ModalLetsTalk = dynamic(
  () => import("@/components/modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);
const MainServices: React.FC = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && <ModalLetsTalk onClose={handleCloseModal} />}
      <section
        className="main-services container w-100 fill-view d-flex flex-col"
        id="services"
      >
        <div className="services-intro w-100 d-flex-center flex-col">
          <LazyMotion features={domAnimation}>
            <m.h2
              variants={titleAnimation}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
              className="akata-title-medium services-intro-title"
            >
              Is your business <span>keeping pace </span>?
            </m.h2>
          </LazyMotion>
          <LazyMotion features={domAnimation}>
            <m.p
              variants={titleAnimation}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
              className="akata-text-medium services-intro-description"
            >
              Digital technology is advancing. Even the smallest delay could put
              you out of business. We make your business ready for
              tomorrow&apos;s challenges, keeping you ahead of the game !
            </m.p>
          </LazyMotion>
        </div>
        <div className="main-services-lists w-100">
          <Image
            src={"/images/services/main-services/plant-deco.png"}
            className="plant-shape-palm left"
            width={600}
            height={600}
            alt="plant shape"
          />
          <Image
            src={"/images/services/main-services/plant-deco.png"}
            className="plant-shape-palm right"
            width={600}
            height={600}
            alt="plant shape"
          />
          {/* gift info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="gift-info d-flex-space-between"
          >
            <FontAwesomeIcon icon={faGift} className="gift-icon  fa-shake" />{" "}
            <span>
              Can't stop thinking about the price? Free quotes here, claim yours
              ASAP!
            </span>
          </motion.div>
          {ServiceData.map((data, index) => (
            <ServiceCard
              key={`${index}-${data.title}`}
              title={data.title}
              description={data.description}
              onClick={handleOpenModal}
            />
          ))}
          <button
            type="button"
            className="btn-explore-services akata-title-medium d-flex-center flex-col"
            onClick={() => router.push("/services")}
          >
            EXPLORE MORE <span>SERVICES</span>
            <FontAwesomeIcon icon={faMouse} className="mouse-icon" />
          </button>
        </div>
      </section>
    </>
  );
};

export default MainServices;

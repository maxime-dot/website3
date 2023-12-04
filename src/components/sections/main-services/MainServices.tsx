"use client";
import React from "react";
import "./main-services.scss";
import {LazyMotion, domAnimation, m, motion} from "framer-motion";
import {titleAnimation} from "@/animation/animation";
import ServiceCard from "@/components/services-card/ServiceCard";
import {useRouter} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faGift, faMouse} from "@fortawesome/free-solid-svg-icons";
const MainServices: React.FC = () => {
  const router = useRouter();
  return (
    <section
      className="main-services fill-view container d-flex flex-col"
      id="services"
    >
      <div className="services-intro w-100 d-flex-center flex-col">
        <LazyMotion features={domAnimation}>
          <m.h2
            variants={titleAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{once: true}}
            className="akata-title-medium services-intro-title"
          >
            Is your business keeping pace?
          </m.h2>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.p
            variants={titleAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{once: true}}
            className="akata-text-medium services-intro-description"
          >
            Digital technology is advancing. Is your business keeping pace? Even
            the smallest delay could put you out of business.  Our goal: to keep
            you ahead of the game !
          </m.p>
        </LazyMotion>
      </div>
      <div className="main-services-lists w-100 ">
        {/* gift info */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.5}}
          className="gift-info d-flex-space-between"
        >
          <FontAwesomeIcon icon={faGift} className="gift-icon  fa-shake" />{" "}
          <span>
            The quote request for your project is free of charge, take advantage
            of it.
          </span>
        </motion.div>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
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
  );
};

export default MainServices;

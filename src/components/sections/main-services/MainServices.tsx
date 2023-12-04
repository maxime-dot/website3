"use client";
import React from "react";
import "./main-services.scss";
import {LazyMotion, domAnimation, m, motion} from "framer-motion";
import {titleAnimation} from "@/animation/animation";
const MainServices: React.FC = () => {
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
    </section>
  );
};

export default MainServices;

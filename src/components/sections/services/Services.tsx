"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./services.scss";
import servicesData from "@/data/services.json";
const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);
import LoadingModal from "../../modal-lets-talk/LoadingModal";
import Button from "../../button/normal/Button";
import { LazyMotion, domAnimation, m, motion } from "framer-motion";
import {
  serviceCardAnimation,
  serviceCardImageAnimation,
  titleAnimation,
} from "@/animation/animation";

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section
      className="services fill-view container d-flex-center flex-col"
      id="services"
    >
      {isModalOpen && <ModalLetsTalk onClose={handleCloseModal} />}
      <div className="services-intro w-100 d-flex-center flex-col">
        <LazyMotion features={domAnimation}>
          <m.h2
            variants={titleAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="akata-title-medium services-intro-title"
          >
            We make your business ready for <br />{" "}
            <span>TOMORROW’s challenges</span>
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
            Digital technology is advancing. Is your business keeping pace? Even
            the smallest delay could put you out of business.  Our goal: to keep
            you ahead of the game !
          </m.p>
        </LazyMotion>
      </div>
      <div className="d-flex flex-col servces-list-item">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="services-items w-100 d-flex-space-between flex-row"
            id={service.linkId}
          >
            <motion.div
              variants={serviceCardAnimation}
              initial={"initial"}
              whileInView={"animate"}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="item-info-text d-flex flex-col"
              style={{ order: index % 2 === 1 ? 1 : 0 }}
            >
              <div className="info-title d-flex flex-col">
                <h3 className="akata-title-medium">
                  {service.deco} <span>{service.title}</span>
                </h3>
                <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                  {service.description}
                </p>
              </div>
              <Button
                ariaLabel="send the project requirement"
                content="LET'S TALK"
                onClick={handleOpenModal}
                type="button"
                hoverType="solid"
              />
            </motion.div>

            <motion.div
              className="services-image"
              variants={serviceCardImageAnimation}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              {index % 2 === 1 ? (
                <Image
                  src={"/images/services/plant-big-decorator.png"}
                  width={565}
                  height={359}
                  alt={`Service ${index + 1} plant decoration`}
                  className="plant right"
                />
              ) : (
                <Image
                  src={"/images/services/plant-mini-decorator.png"}
                  width={565}
                  height={359}
                  alt={`Service ${index + 1} plant decoration`}
                  className="plant"
                />
              )}
              {service.demoSrc && (
                <Image
                  src={service.demoSrc}
                  width={565}
                  height={359}
                  alt={`Service ${index + 1}`}
                  className="demo"
                />
              )}

              <div className="image-main">
                <Image
                  src={service.imageSrc}
                  width={565}
                  height={359}
                  alt={`Service ${index + 1}`}
                  className="image-demo"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Services);

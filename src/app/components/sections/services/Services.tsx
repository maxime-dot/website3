"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./services.scss";
const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  }
);
import LoadingModal from "../../modal-lets-talk/LoadingModal";
import Button from "../../button/normal/Button";
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
        <h2 className="akata-title-medium services-intro-title">
          Solving Tech Challenges with Our <span> IT Services</span>
        </h2>
        <p className="akata-text-medium services-intro-description">
          In a rapidly evolving digital landscape, businesses face a multitude
          of technology challenges. At Akata Goavana , we offer tailored
          solutions to address these challenges and help you thrive in the
          digital age.
        </p>
      </div>

      <div className=" d-flex flex-col servces-list-item">
        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col">
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                Streamlined <span>UI/UX Design</span>
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                Our UI/UX design services ensure that your digital presence is
                not only visually appealing but also user-friendly, improving
                customer engagement and satisfaction.
              </p>
            </div>
            <Button
              ariaLabel="send the project requirement"
              content="LET'S TALK"
              onClick={handleOpenModal}
              type="button"
              hoverType="solid"
            />
          </div>
          <Image
            src={"/images/services/ui-ux-design.png"}
            width={565}
            height={359}
            alt="UI/UX Design services demonstration"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

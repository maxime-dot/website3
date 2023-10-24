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

        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col" style={{ order: 1 }}>
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                Strategic <span>Consultation</span>
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                We provide strategic consultation to help you navigate the
                complex world of technology, making informed decisions that
                drive your business forward.
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
            style={{ order: 0 }}
            src={"/images/services/consultation.png"}
            width={565}
            height={359}
            alt="UI/UX Design services demonstration"
          />
        </div>
        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col">
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                Efficient <span>Database Management</span>
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                Managing data efficiently is a constant struggle. Our database
                system management solutions keep your data secure, organized,
                and easily accessible.
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
            src={"/images/services/database-management.png"}
            width={565}
            height={359}
            alt="UI/UX Design services demonstration"
          />
        </div>
        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col" style={{ order: 1 }}>
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                Bespoke <span>Web App Development</span>
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                We craft web applications tailored to your unique needs, helping
                you automate processes and stay ahead of the competition.
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
            style={{ order: 0 }}
            src={"/images/services/web-app-dev.png"}
            width={565}
            height={359}
            alt="UI/UX Design services demonstration"
          />
        </div>
        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col">
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                <span> E-commerce & CMS</span> Solutions
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                We simplify e-commerce and content management, allowing you to
                focus on growing your business without the technical headaches.
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
            src={"/images/services/e-commerce.png"}
            width={565}
            height={359}
            alt="UI/UX Design services demonstration"
          />
        </div>
        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col" style={{ order: 1 }}>
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                Cutting-Edge <span>Mobile Apps</span>
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                Mobile apps are the future of engagement. Our mobile app
                development services create user-friendly iOS and Android apps
                to expand your reach.
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
            style={{ order: 0 }}
            src={"/images/services/mobile-app.png"}
            width={565}
            height={359}
            alt="UI/UX Design services demonstration"
          />
        </div>
        <div className="services-items w-100 d-flex-space-between flex-row">
          <div className="item-info-text d-flex flex-col">
            <div className="info-title d-flex flex-col">
              <h3 className="akata-title-medium">
                Robust <span>Desktop Applications</span>
              </h3>
              <p className="akata-text-medium" style={{ maxWidth: 441 }}>
                Robust Desktop Applications: Our desktop app development ensures
                that your internal processes run seamlessly, improving
                productivity and efficiency.
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
            src={"/images/services/desktop-app-dev.png"}
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

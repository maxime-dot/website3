"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./testimonial.scss";
import Button from "../../button/normal/Button";
import ButtonOutline from "../../button/outline/ButtonOutline";
import LoadingModal from "../../modal-lets-talk/LoadingModal";
import TestimonialCard from "../../cards/testimonial/TestimonialCard";
const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  }
);

const Testimonial: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <section
      className="akata-testimonial fill-view   d-flex flex-row"
      id="#testimonal"
    >
      <Image
        src={"/images/robot-hand.png"}
        width={284}
        height={555}
        alt="the nature and technologies, tree and hand"
        className="testimonial-decorator"
        priority={true}
      />
      {openModal && <ModalLetsTalk onClose={handleCloseModal} />}
      <div className="container testimonial-content d-flex flex-row">
        <div className="testimonial-info d-flex flex-col">
          <div className="text-group d-flex flex-col">
            <h2 className="akata-title-strong">
              What our <span>customer</span> say about us?
            </h2>
            <p className="akata-text-big">
              Experience the love our clients have for our IT agency&apos;s
              work. Explore their glowing testimonials and discover why they
              trust us with their technology needs.
            </p>
          </div>
          <div className="button-group d-flex flex-row">
            <Button
              hoverType="shadowed"
              content="LET'S TALK"
              type="button"
              onClick={handleOpenModal}
              ariaLabel="Open let's talk modal to submit your project requirement"
            />
            <ButtonOutline
              ariaLabel="Read more about customer testimonial"
              onClick={handleOpenModal}
              title="Read more about customer testimonial"
              content="READ MORE"
            />
          </div>
        </div>
        <div className="testimonial-customer">
          <div className="customer d-flex flex-col">
            <TestimonialCard />
            <TestimonialCard />
          </div>
          <div className="customer d-flex flex-col">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

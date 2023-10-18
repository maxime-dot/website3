"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./testimonial.scss";
import Button from "../../button/normal/Button";
import ButtonOutline from "../../button/outline/ButtonOutline";
const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk")
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
      className="akata-testimonial fill-view  container d-flex flex-row"
      id="#testimonal"
    >
      {openModal && <ModalLetsTalk onClose={handleCloseModal} />}
      <div className="testimonial-info d-flex flex-col">
        <div className="text-group d-flex flex-col">
          <h2 className="akata-title-strong">
            What our <span>customer</span> say about us?
          </h2>
          <p className="akata-text-big">
            Experience the love our clients have for our IT agency&apos;s work.
            Explore their glowing testimonials and discover why they trust us
            with their technology needs.
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
      <div className="testimonial-customer">E</div>
    </section>
  );
};

export default Testimonial;

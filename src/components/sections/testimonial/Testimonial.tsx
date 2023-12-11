"use client";
import React, {useState} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./testimonial.scss";
import {motion} from "framer-motion";
// data
import testimonials from "@/data/testimonials.json";
import {TestimonialDataType} from "../../../types/testimonial.type";

// components
import Button from "../../button/normal/Button";
import ButtonOutline from "../../button/outline/ButtonOutline";
import LoadingModal from "../../modal-lets-talk/LoadingModal";
import TestimonialCard from "../../cards/testimonial/TestimonialCard";
import TestimonialSlider from "../../sliders/testimonial-slider/TestimonialSlider";

const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  }
);
const emptyState = {
  id: "",
  name: "",
  post: "",
  profile: "",
  profileLarge: "",
  testimonials: "",
  society: {
    name: "",
    website: "",
  },
};

// Initial state
const initialSelectedCustomer: TestimonialDataType = testimonials[0]
  ? testimonials[0]
  : emptyState;

const Testimonial: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<TestimonialDataType>(
    initialSelectedCustomer
  );
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenSlider = (data: TestimonialDataType) => {
    setSelectedCustomer(data);
    setOpenSlider(true);
  };

  const handleSliderClose = () => {
    setOpenSlider(false);
  };
  return (
    <section
      className="akata-testimonial w-100   d-flex flex-row"
      id="testimonial"
    >
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{delay: 0.5}}
      >
        <Image
          src={"/images/robot-hand.png"}
          width={284}
          height={555}
          alt="the nature and technologies, tree and hand"
          className="testimonial-decorator"
          priority={true}
        />
      </motion.div>

      <TestimonialSlider
        onClose={handleSliderClose}
        isOpen={openSlider}
        selectedCustomer={selectedCustomer}
      />
      {openModal && <ModalLetsTalk onClose={handleCloseModal} />}
      <div className="container testimonial-content d-flex flex-row">
        <div className="testimonial-info d-flex flex-col">
          <div className="text-group d-flex flex-col">
            <motion.h2
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
              viewport={{once: true}}
              className="akata-title-strong"
            >
              MORE THAN <span>customers</span> ...
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}
              viewport={{once: true}}
              className="akata-text-big description"
            >
              <span> They are our LONG-STANDING PARTNERS</span> <br /> They have
              been with us since the beginning of their digital adventure, AKATA
              GOAVANA has been part of their success story for years now.
            </motion.p>
          </div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            viewport={{once: true}}
            className="card-slides"
          >
            {testimonials.map((testimonial: TestimonialDataType) => (
              <TestimonialCard
                key={`testimonail-${testimonial.id}`}
                name={testimonial.name}
                post={testimonial.post}
                profile={testimonial.profile}
                testimonials={testimonial.testimonials}
                onClick={() => handleOpenSlider(testimonial)}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            viewport={{once: true}}
            className="button-group d-flex flex-row"
          >
            <Button
              hoverType="shadowed"
              content="LET'S TALK"
              type="button"
              onClick={handleOpenModal}
              ariaLabel="Open let's talk modal to submit your project requirement"
            />
            <ButtonOutline
              ariaLabel="Read more about customer testimonial"
              onClick={() => handleOpenSlider(selectedCustomer)}
              title="Read more about customer testimonial"
              content="READ MORE"
            />
          </motion.div>
        </div>
        <div className="testimonial-customer d-flex">
          <div className="card-container d-flex flex-col">
            {testimonials
              .slice(0, 2)
              .map((testimonial: TestimonialDataType) => (
                <TestimonialCard
                  onClick={() => handleOpenSlider(testimonial)}
                  key={`testimonial-${testimonial.id}`}
                  name={testimonial.name}
                  post={`${testimonial.post} - ${testimonial.society.name}`}
                  profile={testimonial.profile}
                  testimonials={testimonial.testimonials}
                />
              ))}
          </div>
          <div className="card-container d-flex flex-col">
            {testimonials
              .slice(2, 5)
              .map((testimonial: TestimonialDataType) => (
                <TestimonialCard
                  onClick={() => handleOpenSlider(testimonial)}
                  key={`"testimonial-"${testimonial.id}`}
                  name={testimonial.name}
                  post={`${testimonial.post} - ${testimonial.society.name}`}
                  profile={testimonial.profile}
                  testimonials={testimonial.testimonials}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonial);

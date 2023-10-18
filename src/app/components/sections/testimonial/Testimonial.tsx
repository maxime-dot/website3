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
      className="akata-testimonial w-100   d-flex flex-row"
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
            <p className="akata-text-big description">
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
        <div className="testimonial-customer d-flex">
          <TestimonialCard
            name="casey harding"
            post="Manager of system & people - Far Frontier Studio"
            profile="/images/customer/casey-harding.png"
            testimonials="« We greatly appreciate having you all with us as well. We all seem to not only work well together which is important, but any of our requests, your group jumps right in without hesitation. Pety has been helping out with some systems stuff and I think has even been learning a little on that end overall for myself, I know I have learned a lot from the group. Beyond client/developer relations, I do enjoy and value the unique partnership we all have formed and think it is great when we can also pick up knowledge along the way 🙂 »."
          />
          <TestimonialCard
            name="casey harding"
            post="Manager of system & people - Far Frontier Studio"
            profile="/images/customer/casey-harding.png"
            testimonials="« We greatly appreciate having you all with us as well. We all seem to not only work well together which is important, but any of our requests, your group jumps right in without hesitation. Pety has been helping out with some systems stuff and I think has even been learning a little on that end overall for myself, I know I have learned a lot from the group. Beyond client/developer relations, I do enjoy and value the unique partnership we all have formed and think it is great when we can also pick up knowledge along the way 🙂 »."
          />
          <TestimonialCard
            name="casey harding"
            post="Manager of system & people - Far Frontier Studio"
            profile="/images/customer/casey-harding.png"
            testimonials="« We greatly appreciate having you all with us as well. We all seem to not only work well together which is important, but any of our requests, your group jumps right in without hesitation. Pety has been helping out with some systems stuff and I think has even been learning a little on that end overall for myself, I know I have learned a lot from the group. Beyond client/developer relations, I do enjoy and value the unique partnership we all have formed and think it is great when we can also pick up knowledge along the way 🙂 »."
          />
          <TestimonialCard
            name="casey harding"
            post="Manager of system & people - Far Frontier Studio"
            profile="/images/customer/casey-harding.png"
            testimonials="« We greatly appreciate having you all with us as well. We all seem to not only work well together which is important, but any of our requests, your group jumps right in without hesitation. Pety has been helping out with some systems stuff and I think has even been learning a little on that end overall for myself, I know I have learned a lot from the group. Beyond client/developer relations, I do enjoy and value the unique partnership we all have formed and think it is great when we can also pick up knowledge along the way 🙂 »."
          />
          <TestimonialCard
            name="casey harding"
            post="Manager of system & people - Far Frontier Studio"
            profile="/images/customer/casey-harding.png"
            testimonials="« We greatly appreciate having you all with us as well. We all seem to not only work well together which is important, but any of our requests, your group jumps right in without hesitation. Pety has been helping out with some systems stuff and I think has even been learning a little on that end overall for myself, I know I have learned a lot from the group. Beyond client/developer relations, I do enjoy and value the unique partnership we all have formed and think it is great when we can also pick up knowledge along the way 🙂 »."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

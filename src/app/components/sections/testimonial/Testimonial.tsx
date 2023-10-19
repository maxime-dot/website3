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

const testimonialData = [
  {
    name: "casey harding",
    post: "Manager of system & people - Far Frontier Studio",
    profile: "/images/customer/casey-harding.png",
    testimonials:
      "« We greatly appreciate having you all with us as well. We all seem to not only work well together which is important, but any of our requests, your group jumps right in without hesitation. Pety has been helping out with some systems stuff and I think has even been learning a little on that end overall for myself, I know I have learned a lot from the group. Beyond client/developer relations, I do enjoy and value the unique partnership we all have formed and think it is great when we can also pick up knowledge along the way 🙂 ».",
  },
  {
    name: "EDOUARD DELGATTE",
    post: "Founder of Indemnflight",
    profile: "/images/customer/edouward-delegate.png",
    testimonials:
      "« « I’ve been working with Akata and its founder for over two years now to evolve our site indemnflight.com (WordPress/Php) as well as backoffice APIs (nodeJS) that allow us to treat air traffic data. Everything has always gone well. Akata works independently and knows how to make itself available for emergencies. Thanks to the whole team. » ».",
  },
  {
    name: "PAUL GEE",
    post: "CEO Top Loan Canada",
    profile: "/images/customer/paul-gee.png",
    testimonials:
      "« I had a great experience working with Bodge and his team. For the budget that was provided, the value was great, and most importantly I felt ongoing communication from him and his team as they were providing updates & making adjustments when necessary. Thanks guys!».",
  },
  {
    name: "CHRISTIAN AGUILA",
    post: "Founder & Lead Developer - Far Frontier Studio",
    profile: "/images/customer/christian-aguila.png",
    testimonials:
      "« We’ve been working with Akata for over 3 years now and have been a critical part in our project, they’ve created and maintained the backend infrastructure of our Unreal Engine 4 MMO game, which contains a wordpress website with an account dashboard, a backend server, an admin panel that allows writing and deploying cloud code, and other projects. They’ve been easy to work with, always deliver in time and are available if needed for critical moments. »",
  },
  {
    name: "DAMIEN B.",
    post: "CEO Power Digital",
    profile: "/images/customer/damine-b.png",
    testimonials:
      "« We collaborate with the Akata agency on specific missions like the development of WordPress plugins or interfacing with external webservices for example. The quality of the work and code delivered is always of good quality, in compliance with industry standards. Teams and management are agile and reactive. We are fully satisfied with this collaboration, which allows us to strengthen our internal team when necessary while maintaining significant agility. »",
  },
];

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

          <div className="card-slides">
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                post={testimonial.post}
                profile={testimonial.profile}
                testimonials={testimonial.testimonials}
              />
            ))}
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
          <div className="card-container d-flex flex-col">
            {testimonialData.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                post={testimonial.post}
                profile={testimonial.profile}
                testimonials={testimonial.testimonials}
              />
            ))}
          </div>
          <div className="card-container d-flex flex-col">
            {testimonialData.slice(2, 5).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                post={testimonial.post}
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

export default Testimonial;

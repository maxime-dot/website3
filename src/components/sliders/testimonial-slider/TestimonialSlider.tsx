import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./testimonial-slider.scss";

import { TestimonialDataType } from "@/types/testimonial.type";
import Link from "next/link";

interface SliderProps {
  onClose: () => void;
  isOpen: boolean;
  selectedCustomer: TestimonialDataType;
}

const TestimonialSlider: React.FC<SliderProps> = ({
  onClose,
  isOpen,
  selectedCustomer,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && sliderRef.current) {
      sliderRef.current.focus();
    }
  }, [isOpen]);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={sliderRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="testimonial-slider fill-view"
          initial="close"
          animate="open"
          exit="close"
          variants={{
            open: { opacity: 1, transform: "translateY(0)" },
            close: { opacity: 0, transform: "translateY(20px)" },
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container slider-content fill-view d-flex-space-between flex-col">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close customer testminial slider"
              className="close-button"
            >
              <FontAwesomeIcon icon={faTimes} className="close-button-icon" />
            </button>
            <div className="slider-title d-flex-center flex-col">
              <h2 className=" akata-title-medium slider-top-title">
                What our <span>customer</span> say about us?
              </h2>
              <p className="akata-text-small text-center">
                Experience the love our clients have for our IT agency&apos;s
                work. Explore their glowing testimonials and discover why they
                trust us with their technology needs.
              </p>
            </div>
            <div className="customer-content w-100">
              <div className="content-words">
                <Image
                  src={"/quote-icon.svg"}
                  width={70}
                  height={46.67}
                  alt="quote icons"
                  className="quote-icon"
                />
                <p className="akata-text-big words">
                  {selectedCustomer.testimonials}
                </p>
                <div className="customer-info d-flex flex-row">
                  <Image
                    src={selectedCustomer.profileLarge}
                    width={70}
                    height={70}
                    alt={`${selectedCustomer.name} profile`}
                    className="mini-profile"
                  />
                  <div className="d-flex flex-col">
                    <span className="akata-title-medium name">
                      {selectedCustomer.name}
                    </span>
                    <span className="akata-text-big">
                      {selectedCustomer.post} -{" "}
                      <Link
                        href={selectedCustomer.society.website}
                        passHref={true}
                        target="_blank"
                        className="slide-society-link"
                      >
                        {" "}
                        {selectedCustomer.society.name}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="content-profile d-flex-center">
                <div className="profile">
                  <Image
                    src={"/images/shape.png"}
                    width={70}
                    height={60}
                    alt={`decoration shape`}
                    className="shape-top"
                  />
                  <Image
                    src={"/images/shape.png"}
                    width={70}
                    height={60}
                    alt={`decoration shape`}
                    className="shape-bottom"
                  />
                  <Image
                    src={selectedCustomer.profileLarge}
                    width={800}
                    height={800}
                    alt={`${selectedCustomer.name} profile`}
                    className="large-profile"
                  />
                </div>
              </div>
            </div>
            <div className="slider-control"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialSlider;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./testimonial-slider.scss";
import Image from "next/image";

interface SliderProps {
  onClose: () => void;
  isOpen: boolean;
}
const TestimonialSlider: React.FC<SliderProps> = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
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
          <div className="container slider-content fill-view d-flex flex-col">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close customer testminial slider"
              className="close-button"
            >
              <FontAwesomeIcon icon={faTimes} className="close-button-icon" />
            </button>
            <div className="slider-title d-flex-center flex-col">
              <h1 className=" akata-title-medium slider-top-title">
                What our <span>customer</span> say about us?
              </h1>
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
                  « We greatly appreciate having you all with us as well. We all
                  seem to not only work well together which is important, but
                  any of our requests, your group jumps right in without
                  hesitation. Pety has been helping out with some systems stuff
                  and I think has even been learning a little on that end
                  overall for myself, I know I have learned a lot from the
                  group. Beyond client/developer relations, I do enjoy and value
                  the unique partnership we all have formed and think it is
                  great when we can also pick up knowledge along the way 🙂 ».
                </p>
                <div className="customer-info d-flex flex-col">
                  <span className="akata-title-medium name">casey harding</span>
                  <span className="akata-text-big">
                    Manager of system & people - Far Frontier Studio
                  </span>
                </div>
              </div>
              <div className="content-profile"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialSlider;

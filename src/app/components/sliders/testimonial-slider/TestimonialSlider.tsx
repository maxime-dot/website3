import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./testimonial-slider.scss";

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
            >
              close
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialSlider;

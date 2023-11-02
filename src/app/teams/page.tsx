"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "./team-page.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/normal/Button";
export const TeamsPage: React.FC = () => {
  const router = useRouter();
  const openModal = () => {
    return;
  };
  return (
    <div className="akata-team-page container">
      <button className="btn-go-back" onClick={() => router.push("/")}>
        <motion.span whileHover={{ y: 10 }}>
          <FontAwesomeIcon icon={faArrowLeft} className="btn-icon" />
        </motion.span>{" "}
        Go Back
      </button>
      <div className="team-page-content w-100">
        <div className="content-text">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="akata-title-strong text-title"
          >
            Our Team of Tech <span>Pioneers...</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="akata-text-big text-description"
          >
            Meet the talented minds driving AKATA GOAVAN. Our diverse team of IT
            experts, developers, designers, and strategists collaborates to
            bring your projects to life. Explore the people behind AKATA GOAVAN
            and discover how we can help shape your digital future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="btn-open-modal"
          >
            <Button
              ariaLabel="Let's talk about your project requirement..."
              content="LET'S TALK"
              onClick={openModal}
              type="button"
              hoverType="shadowed"
            />
          </motion.div>
        </div>
        <div className="content-gallery"></div>
      </div>
    </div>
  );
};
export default TeamsPage;

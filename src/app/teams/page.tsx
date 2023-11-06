"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
          <div className="team-photos">
            <Image
              src={"/images/teams/akata-team.png"}
              alt="akata-team"
              width={300}
              height={600}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-2.png"}
              alt="akata-team"
              width={300}
              height={600}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-3.png"}
              alt="akata-team"
              width={300}
              height={600}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-4.png"}
              alt="akata-team"
              width={300}
              height={600}
              className="card-part-photo"
            />
          </div>
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
        <div className="content-gallery w-100">
          <div className="card-part">
            <motion.div
              initial={{ opacity: 0, y: -40, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ delay: 0.2 }}
              whileHover={{ rotate: 0 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-2.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
              />
            </motion.div>
          </div>
          <div className="card-part">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-3.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-4.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              whileHover={{ rotate: 0 }}
              transition={{ delay: 1 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-5.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamsPage;

"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "./team-page.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const TeamsPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="akata-team-page container">
      <button className="btn-go-back" onClick={() => router.push("/")}>
        <motion.span whileHover={{ y: 10 }}>
          <FontAwesomeIcon icon={faArrowLeft} className="btn-icon" />
        </motion.span>{" "}
        Go Back
      </button>
    </div>
  );
};
export default TeamsPage;

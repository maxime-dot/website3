"use client";
import React from "react";
import "./team-list.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import TeamData from "@/data/team-list.json";
import Link from "next/link";
import Image from "next/image";

const TeamList: React.FC = () => {
  return (
    <div className="akata-team-list d-flex-center flex-col">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="akata-title-medium"
      >
        Together towards your triumph !
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="akata-text-medium team-title-description"
      >
        Beyond talent, our team is a dynamic force that shapes the future of
        digital solutions. Excellence and innovation define our work ethic. Our
        workflow is a symphony of precision and creativity. From concept to
        execution, we immerse ourselves in your project. As we said, your
        success is not just a goal; it&apos;s a guarantee. We are driven by a
        singular focus – to maximize your return on investment and deliver
        results that exceed expectations.
      </motion.p>
      <div className="list-content container">
        {TeamData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="team-item d-flex-space-between flex-col"
            key={`team-${index}`}
          >
            <Image
              src={
                data.profileImage
                  ? data.profileImage
                  : "/images/teams/team-profile/default.png"
              }
              alt={`${data.firstName} ${data.lastName} profile`}
              width={800}
              height={800}
              className={"pics"}
            />

            <div className="profile-info d-flex flex-col">
              <span className={"profile-name"}>
                {data.firstName} {data.lastName}
              </span>
              <span className={"profile-post"}>{data.post}</span>
            </div>
            <div className="profile-social-link d-flex flex-row">
              {data.socialLink.facebook && (
                <Link
                  href={data.socialLink.facebook}
                  passHref={true}
                  target={"_blank"}
                  className={"link-item"}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              )}
              {data.socialLink.linkedin && (
                <Link
                  href={data.socialLink.linkedin}
                  passHref={true}
                  target={"_blank"}
                  className={"link-item"}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              )}
              {data.socialLink.github && (
                <Link
                  href={data.socialLink.github}
                  passHref={true}
                  target={"_blank"}
                  className={"link-item"}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default React.memo(TeamList);

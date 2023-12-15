"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/button/normal/Button";
import LoadingModal from "@/components/modal-lets-talk/LoadingModal";
import TeamList from "@/components/team-list/TeamList";
import "./team-page.scss";

// Dynamically imported components
const Gallery = dynamic(() => import("@/components/gallery/Gallery"), {
  loading: () => <LoadingModal />,
});
const Modal = dynamic(
  () => import("@/components/modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);

export default function Page() {
  const router = useRouter();
  const [openGallery, setOpenGallery] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPics, setSelectePics] = useState("");
  const handleOpenGallery = (data: string) => {
    setOpenGallery(true);
    setSelectePics(data);
  };

  const handleClosGallery = () => {
    setOpenGallery(false);
  };
  return (
    <div className="akata-team-page container">
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {openGallery && (
        <Gallery onClose={handleClosGallery} initalPics={selectedPics} />
      )}
      <button className="btn-go-back" onClick={() => router.push("/#teams")}>
        <motion.span whileHover={{ y: 10 }}>
          <FontAwesomeIcon icon={faArrowLeft} className="btn-icon" />
        </motion.span>{" "}
        Go Back
      </button>
      <div className="team-page-content w-100">
        <div className="content-text">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="akata-title-strong text-title"
          >
            <span>breakthrough</span>, not frustration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="akata-text-big text-description"
          >
            <span> Outsourced IT getting you down?</span> <br />
            Bankruptcy-level budget issues, operational stagnations, and
            incompetence nightmares being too familiar?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="akata-text-big text-description"
          >
            Let’s end all of this now! We implement agile project management,
            using scrum and kanban frameworks for upfront clarity: scope,
            budget, timeline, and quality assured. Our team of IT engineers,
            Devops and Cloud specialists, QA testers, project managers, AI and
            Web Design experts have years of experience collaborating with
            international clients.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="akata-text-big text-description"
          >
            AKATA GOAVANA alleviates the risks of outsourcing so you can focus
            on growing your business, not pulling your hair out.
            <br />
            <span>
              {" "}
              Join forces with us and make IT work for you, not against you.{" "}
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="team-photos"
          >
            <Image
              src={"/images/teams/akata-team.png"}
              alt="akata-team"
              width={1920}
              height={1920}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/gallery/team-akata-sortie-ivelany.avif"}
              alt="akata-team"
              width={1920}
              height={1920}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-3.png"}
              alt="akata-team"
              width={1920}
              height={1920}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-4.png"}
              alt="akata-team"
              width={1920}
              height={1920}
              className="card-part-photo"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="btn-open-modal"
          >
            <Button
              ariaLabel="Let's talk about your project requirement..."
              content="LET'S TALK"
              onClick={() => setIsModalOpen(true)}
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
                src={"/images/teams/gallery/team-akata-sortie-ivelany.avif"}
                alt="akata-team"
                width={800}
                height={800}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery(
                    "/images/teams/gallery/team-akata-sortie-ivelany.avif",
                  )
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/gallery/akata-cto-coding.avif"}
                alt="akata-team"
                width={1920}
                height={1080}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery(
                    "/images/teams/gallery/akata-cto-coding.avif",
                  )
                }
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
                src={"/images/teams/gallery/team-akata-sortie.avif"}
                alt="akata-team"
                width={1920}
                height={1080}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery(
                    "/images/teams/gallery/team-akata-sortie.avif",
                  )
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="part-photo"
            >
              <Image
                src={"/images/teams/gallery/team-akata-shooting.avif"}
                alt="akata-team"
                width={1920}
                height={1080}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery(
                    "/images/teams/gallery/team-akata-shooting.avif",
                  )
                }
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
                src={"/images/teams/gallery/mr-manase-coding.avif"}
                alt="akata-team"
                width={1920}
                height={1080}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery(
                    "/images/teams/gallery/mr-manase-coding.avif",
                  )
                }
              />
            </motion.div>
          </div>
        </div>
      </div>

      <TeamList />
    </div>
  );
}

"use client";
import React, {useState} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
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
  }
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
        <motion.span whileHover={{y: 10}}>
          <FontAwesomeIcon icon={faArrowLeft} className="btn-icon" />
        </motion.span>{" "}
        Go Back
      </button>
      <div className="team-page-content w-100">
        <div className="content-text">
          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            className="akata-title-strong text-title"
          >
            Our Team of Tech <span>Pioneers...</span>
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1}}
            className="akata-text-big text-description"
          >
            Meet the talented minds driving AKATA GOAVAN. Our diverse team of IT
            experts, developers, designers, and strategists collaborates to
            bring your projects to life. Explore the people behind AKATA GOAVAN
            and discover how we can help shape your digital future.
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className="team-photos"
          >
            <Image
              src={"/images/teams/akata-team.png"}
              alt="akata-team"
              width={800}
              height={800}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-2.png"}
              alt="akata-team"
              width={800}
              height={800}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-3.png"}
              alt="akata-team"
              width={800}
              height={800}
              className="card-part-photo"
            />
            <Image
              src={"/images/teams/akata-team-4.png"}
              alt="akata-team"
              width={800}
              height={800}
              className="card-part-photo"
            />
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
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
              initial={{opacity: 0, y: -40, rotate: 10}}
              animate={{opacity: 1, y: 0, rotate: 4}}
              transition={{delay: 0.2}}
              whileHover={{rotate: 0}}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team.png"}
                alt="akata-team"
                width={800}
                height={800}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery("/images/teams/akata-team.png")
                }
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4}}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-2.png"}
                alt="akata-team"
                width={800}
                height={800}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery("/images/teams/akata-team-2.png")
                }
              />
            </motion.div>
          </div>
          <div className="card-part">
            <motion.div
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6}}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-3.png"}
                alt="akata-team"
                width={800}
                height={800}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery("/images/teams/akata-team-3.png")
                }
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.8}}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-4.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery("/images/teams/akata-team-4.png")
                }
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0, rotate: -4}}
              whileHover={{rotate: 0}}
              transition={{delay: 1}}
              className="part-photo"
            >
              <Image
                src={"/images/teams/akata-team-5.png"}
                alt="akata-team"
                width={300}
                height={600}
                className="card-part-photo"
                onClick={() =>
                  handleOpenGallery("/images/teams/akata-team-5.png")
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

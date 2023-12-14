"use client";
import React, { useState } from "react";
import "./gallery.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import GalleryData from "@/data/team-gallery.json";

interface GalleryProps {
  onClose?: () => void;
  initalPics: string;
}

const Gallery: React.FC<GalleryProps> = ({ onClose, initalPics }) => {
  const [selectedImage, setSelectedImage] = useState(initalPics);
  return (
    <div className="akata-gallery fill-view d-flex-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="gallery-container d-flex flex-col"
      >
        <div className="gallery-container-shower">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className={"shower"}
          >
            <button
              type={"button"}
              onClick={onClose}
              className={"btn-close-gallery"}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={selectedImage}
              className="selected-image"
            >
              <Image
                src={selectedImage}
                alt={"akata teams"}
                width={800}
                height={543}
                className={"selected-image"}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="picture-list">
          {GalleryData &&
            GalleryData.length > 0 &&
            GalleryData.map((data) => (
              <motion.div
                key={data.id}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                onClick={() => setSelectedImage(data.imgSrc)}
                className="list-thumb-container"
              >
                <Image
                  src={data.imgSrc}
                  alt={data.alt}
                  width={800}
                  height={543}
                  className={"list-thumb"}
                />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Gallery;

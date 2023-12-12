"use  client";
import React from "react";
import Image from "next/image";
import style from "./not-found.module.scss";
import Navbar from "@/components/navigation-bar/Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const NotFound: React.FC = () => {
  const handleBackHome = () => {
    return;
  };
  return (
    <div className={style.notFound}>
      <Navbar />
      <Image
        src="/images/not-found-hero.avif"
        alt="Image hero."
        width={997.62}
        height={718.46}
        className={style.hero}
      />
      <div className={style.notFoundInfo}>
        <div className={style.infoText}>
          <h2 className={style.title}>
            <span>Oups!</span> 404 Not Found
            <div className={style.titleBars} />
          </h2>
          <p className="akata-text-big">
            Sincerely sorry, but it seems that the page you were looking for is
            either not found or unavailable. This could be due to an internet
            connection problem or incorrect page navigation.
          </p>
        </div>
        <Link href={"/"} className={style.returnLink}>
          <FontAwesomeIcon icon={faArrowLeft} className={style.linkIcon} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

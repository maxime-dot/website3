"use  client";
import React from "react";
import Image from "next/image";
import style from "./not-found.module.scss";
import Navbar from "./components/navigation-bar/Navbar";

const NotFound: React.FC = () => {
  const handleBackHome = () => {
    return;
  };
  return (
    <div className={style.notFound}>
      <Navbar />
      <Image
        src="/images/not-found-hero.png"
        alt="Image hero."
        width={997.62}
        height={718.46}
        className={style.hero}
      />
      <div className={style.notFoundInfo}>
        <div className={style.infoText}>
          <h1 className={style.title}>
            <span>Oups!</span> 404 Not Found
            <div className={style.titleBars} />
          </h1>
          <p className="akata-text-big">
            Sincerely sorry, but it seems that the page you were looking for is
            either not found or unavailable. This could be due to an internet
            connection problem or incorrect page navigation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

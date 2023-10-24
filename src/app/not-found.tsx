import React from "react";
import Image from "next/image";
const NotFound: React.FC = () => {
  return (
    <div className="not-found-page container fill-view d-flex-center">
      <Image
        src={"/images/not-found-hero.png"}
        alt="Image hero."
        width={997.62}
        height={718.46}
      />
      <div className="not-fount-info"></div>
    </div>
  );
};

export default NotFound;

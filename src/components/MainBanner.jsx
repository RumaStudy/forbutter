import React from "react";
import MainSlider from "./MainSlider";

/* Library */

const MainBanner = () => {
  return (
    <section className="MainBanner">
      {/* ImgSlider */}
      <MainSlider />
      <header>
        <button>RESERVATION</button>
        <button>BUTTER</button>
        <button>dont't know</button>
      </header>
    </section>
  );
};

export default MainBanner;

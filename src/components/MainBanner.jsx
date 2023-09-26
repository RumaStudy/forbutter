import React from "react";

/* Img Import */
import mVisual01 from "./img/mainVisual01.png";
import mVisual02 from "./img/mainVisual02.png";
import mVisual03 from "./img/mainVisual03.png";
import mVisual04 from "./img/mainVisual04.png";

const MainBanner = () => {
  return (
    <section>
      {/* Img Slider */}
      <arcticle className="imgSlider">
        <img src={mVisual01} alt="main_visual_img" />
        <img src={mVisual02} alt="main_visual_img" />
        <img src={mVisual03} alt="main_visual_img" />
        <img src={mVisual04} alt="main_visual_img" />
      </arcticle>
      <header>
        <button>RESERVATION</button>
        <button>BUTTER</button>
        <button></button>
      </header>
    </section>
  );
};

export default MainBanner;

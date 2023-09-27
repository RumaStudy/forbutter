import React, { useState } from "react";
import MainSlider from "./MainSlider";

/* img */
import hbg from "./img/hbgMenu.svg";

/* Library */

const MainBanner = (props) => {
  return (
    <section className="MainBanner">
      {/* ImgSlider */}
      <MainSlider />
      <header className="mainVisual_header">
        <button
          className="mainVisual_header_item"
          onClick={() => {
            props.setLoginState((prev) => !prev);
          }}
        >
          RESERVATION
        </button>
        <button className="mainVisual_header_item">BUTTER</button>
        <button className="mainVisual_header_item">
          <img src={hbg} alt="" />
        </button>
      </header>
    </section>
  );
};

export default MainBanner;

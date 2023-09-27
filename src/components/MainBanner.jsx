import React from "react";
import MainSlider from "./MainSlider";

/* Library */
import { styled } from "styled-components";

/* Styled-Components */

const MainBanner = () => {
  return (
    <section className="MainBanner">
      {/* ImgSlider */}
      <MainSlider />
      <header>
        <button>RESERVATION</button>
        <button>BUTTER</button>
        <button></button>
      </header>
    </section>
  );
};

export default MainBanner;

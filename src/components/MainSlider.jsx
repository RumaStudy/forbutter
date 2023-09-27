import React, { useEffect, useRef, useState } from "react";

/* Library */
import styled from "styled-components";

/* Img Import */
import mVisual01 from "./img/mainVisual01.png";
import mVisual02 from "./img/mainVisual02.png";
import mVisual03 from "./img/mainVisual03.png";
import mVisual04 from "./img/mainVisual04.png";

const bgArr = [mVisual01, mVisual02, mVisual03, mVisual04];

const SliderWrap = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 400%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  & > li {
    width: 25%;
    height: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;

const MainSlider = () => {
  const [sliderlocate, setSliderLocate] = useState(0); // Slider 위치값
  return (
    <article className="mainSlider">
      <SliderWrap>
        {bgArr.map((items) => (
          <li key={items}>
            <img src={items} alt="" />
          </li>
        ))}
      </SliderWrap>
    </article>
  );
};

export default MainSlider;

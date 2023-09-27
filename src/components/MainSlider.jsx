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
  /* Slide Variables */
  const slideAmountTotal = -75;
  const [sliderLocate, setSliderLocate] = useState(0); // Slider 위치값
  const slideRef = useRef();

  /* Slide Movement Function */
  const slideMovement = (state) => {
    slideRef.current.style.transition = "0.5s";
    slideRef.current.style.transform = `translateX(${state}%)`;
  };

  /* useEffect() */
  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderLocate <= slideAmountTotal) {
        setSliderLocate(0);
      } else {
        setSliderLocate((prev) => prev - 25);
      }
      return clearInterval(timer);
    }, 3000);
    slideMovement(sliderLocate);
  }, [sliderLocate]);

  return (
    <SliderWrap ref={slideRef}>
      {bgArr.map((items) => (
        <li key={items}>
          <img src={items} alt="" />
        </li>
      ))}
    </SliderWrap>
  );
};

export default MainSlider;

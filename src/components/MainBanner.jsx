import React, { useState, useEffect, useRef } from "react";

/* Library */
import { styled } from "styled-components";

/* Img Import */
import mVisual01 from "./img/mainVisual01.png";
import mVisual02 from "./img/mainVisual02.png";
import mVisual03 from "./img/mainVisual03.png";
import mVisual04 from "./img/mainVisual04.png";

const bgArr = [mVisual01, mVisual02, mVisual03, mVisual04];

const MainBanner = () => {
  const [slideLocate, setSlideLocate] = useState(0);
  /* 0, 25, 50, 75 */
  const slideRef = useRef();
  useEffect(() => {
    const slidePlay = setInterval(() => {
      if (slideLocate >= 75) {
        setSlideLocate(0);
      } else {
        setSlideLocate(slideLocate - 25);
      }
      console.log("이동 시도");
      slideRef.current.style.transform = `translateX(${slideLocate})`;
    }, 3000);
    return clearInterval(slidePlay);
  });

  /* Styled-Components */
  /* BG Slider */
  const ImgSlider = styled.ul`
    width: 400%;
    height: 100vh;
    transform: translate(${slideLocate});
    transition: 550ms;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    & > li {
      display: block;
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
  return (
    <section className="MainBanner">
      {/* Img Slider */}
      <ImgSlider ref={slideRef} className="imgSlider">
        {bgArr.map((items) => (
          <li>
            <img src={items} alt="bg_img" />
          </li>
        ))}
      </ImgSlider>
      <header>
        <button>RESERVATION</button>
        <button>BUTTER</button>
        <button></button>
      </header>
    </section>
  );
};

export default MainBanner;

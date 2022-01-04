import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

import LandingImgList from "../../assets/images/LandingCarouselImg";

const CarouselBox = () => {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    const ChangeIndex = () => {
      const ImgIndex = activeImg === LandingImgList.length - 1 ? 0 : activeImg + 1;
      setActiveImg(ImgIndex);
    };
    setInterval(ChangeIndex, 3000);
    return () => {
      clearInterval(ChangeIndex);
    };
  }, [activeImg]);

  return (
    <Wrapper>
      {LandingImgList.map((e, i) => (
        <Image active={activeImg === i} key={i} src={e} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Image = styled.img`
  width: 440px;
  height: 350px;
  border-radius: 15px;

  position: absolute;

  opacity: 0;

  transition: opacity 1.4s ease-in;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      transition: opacity 1.4s ease-out;
    `}
`;

export default CarouselBox;

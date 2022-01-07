import styled, { css } from "styled-components";
import { useState } from "react";
import { InstaPortfolioCarousel, Working } from "./";

const CarouselController = () => {
  const portfolioList = [<InstaPortfolioCarousel />, <Working />];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevIndex = () => {
    activeIndex === 0 ? setActiveIndex(portfolioList.length - 1) : setActiveIndex((prev) => prev - 1);
  };
  const handleNxtIndex = () => {
    activeIndex === portfolioList.length - 1 ? setActiveIndex(0) : setActiveIndex((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <PrevBtn onClick={handlePrevIndex}>{"<"}</PrevBtn>
      {portfolioList.map((e, i) => (
        <Box active={activeIndex === i}>{e}</Box>
      ))}
      <NxtBtn onClick={handleNxtIndex}>{">"}</NxtBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button`
  height: 100%;
  border: none;
  font-size: 50px;
  background: none;
  color: #fff;
  border-radius: 15px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    color: black;
  }

  &:active {
    background: rgba(255, 255, 255, 0.7);
  }
`;

const PrevBtn = styled(Btn)``;

const NxtBtn = styled(Btn)``;

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

export default CarouselController;

import styled, { css } from "styled-components";
import { useState } from "react";
import { ImgBackground, ImgBear } from "../../assets/images";
import CarouselController from "../organisms/CarouselController";
import LetMEIntroduce from "../organisms/PortFolioes/LetMeIntroduce";

const Landing = () => {
  const [activeTalkBox, setactiveTalkBox] = useState(false);

  const handleTalk = () => {
    setactiveTalkBox(!activeTalkBox);
  };

  return (
    <Wrapper>
      <BackgroundImg src={ImgBackground} />
      <IntroBox>
        <TitleBox>
          <Title>지구인 여러분 안녕하세요.</Title>
        </TitleBox>
        <BearWrapper>
          <StyledImgBear onClick={handleTalk} />
        </BearWrapper>
        <PortfolioBox active={activeTalkBox}>
          <CarouselController />
        </PortfolioBox>
        <IntroduceBox active={!activeTalkBox}>
          <LetMEIntroduce />
        </IntroduceBox>
      </IntroBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: relative;
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const IntroBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;
  top: 40px;

  color: #fff;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 0;
`;

const Title = styled.h2`
  text-align: center;
`;

const BearWrapper = styled.div`
  position: absolute;
  top: 100px;
  width: 190px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImgBear = styled(ImgBear)`
  width: 180px;
  height: 180px;
  border-radius: 15px;

  &:hover {
    background: yellow;
    cursor: pointer;
  }

  &:active {
    width: 130px;
    height: 130px;
  }
`;

const PortfolioBox = styled.div`
  position: absolute;
  top: 320px;
  width: 80%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const IntroduceBox = styled.div`
  position: absolute;
  top: 320px;
  width: 20%;
  min-height: 50%;
  padding: 20px;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;
export default Landing;

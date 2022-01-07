import styled, { css } from "styled-components";
import { useState } from "react";
import { ImgBackground, ImgGlasses, ImgArrow } from "../../assets/images";
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
          <Title2>제 포트폴리오 한번 봐주실래요?</Title2>
        </TitleBox>
        <GlassWrapper>
          <Glasses src={ImgGlasses} onClick={handleTalk} />
          <StyledImgArrow active={!activeTalkBox} />
        </GlassWrapper>
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
  width: 100vw;
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
const Title2 = styled.h3`
  text-align: center;
`;

const GlassWrapper = styled.div`
  position: absolute;
  top: 150px;
  width: 190px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Glasses = styled.img`
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

const StyledImgArrow = styled(ImgArrow)`
  position: absolute;
  display: none;
  top: -55px;
  left: -200px;

  width: 200px;
  height: 200px;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const PortfolioBox = styled.div`
  position: absolute;
  top: 400px;
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
  top: 350px;
  width: 20%;
  height: 55%;
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
export default Landing;

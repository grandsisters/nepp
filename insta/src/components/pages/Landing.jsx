import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
import { ImgBackground, ImgGlasses } from "../../assets/images";
import CarouselBox from "../organisms/CarouselBox";

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
          <GlassTalk active={activeTalkBox}>여기를 눌러주세요! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</GlassTalk>
          <Glasses src={ImgGlasses} onClick={handleTalk} />
        </GlassWrapper>
        <PortfolioBox>
          <EachPortfolio>
            <Link to="/main">
              <LinkBtn>인스타그램</LinkBtn>
            </Link>
            <CarouselBox />
          </EachPortfolio>
        </PortfolioBox>
      </IntroBox>
    </Wrapper>
  );
};

const GlassWrapper = styled.div`
  position: relative;
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

const GlassTalk = styled.span`
  position: absolute;
  top: 200px;
  left: 24px;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

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

  color: #fff;
`;

const TitleBox = styled.div``;

const Title = styled.h2`
  text-align: center;
`;
const Title2 = styled.h3`
  text-align: center;
`;

const PortfolioBox = styled.div`
  width: 40%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
`;

const EachPortfolio = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LinkBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: 90px;
  height: 20px;
  background: rgb(54, 172, 250);

  color: #fff;
  font-weight: bold;
  font-size: 14px;

  &:active {
    background: rgb(35, 107, 155);
  }
`;

export default Landing;

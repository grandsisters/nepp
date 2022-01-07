import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
import { ImgBackground, ImgGlasses, ImgArrow } from "../../assets/images";
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
          <Glasses src={ImgGlasses} onClick={handleTalk} />
          <StyledImgArrow active={!activeTalkBox} />
        </GlassWrapper>
        <PortfolioBox active={activeTalkBox}>
          <EachPortfolio>
            <Link to="/login">
              <LinkBtn>인스타그램</LinkBtn>
            </Link>
            <CarouselBox />
          </EachPortfolio>
        </PortfolioBox>
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
  top: 10%;

  color: #fff;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 10px;
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
  top: -40px;
  left: -150px;

  width: 150px;
  height: 150px;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const PortfolioBox = styled.div`
  position: absolute;
  top: 350px;
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
  margin-bottom: 20px;

  color: #fff;
  font-weight: bold;
  font-size: 14px;

  &:active {
    background: rgb(35, 107, 155);
  }
`;

export default Landing;

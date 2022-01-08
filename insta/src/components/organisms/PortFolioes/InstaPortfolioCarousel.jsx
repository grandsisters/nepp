import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InstaCarouselImg from "../../../assets/images/InstaCarouselImg";

const InstaPortfolioCarousel = () => {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    const ChangeIndex = () => {
      const ImgIndex = activeImg === InstaCarouselImg.length - 1 ? 0 : activeImg + 1;
      setActiveImg(ImgIndex);
    };
    setInterval(ChangeIndex, 3500);
    return () => {
      clearInterval(ChangeIndex);
    };
  }, [activeImg]);

  return (
    <EachPortfolio>
      <TextBoxOne>
        <h3>작업 인원:</h3>
        <span>1명</span>
        <h3>작업 기간:</h3>
        <span>2~3주</span>
      </TextBoxOne>

      <MainBox>
        <BtnBox>
          <Link to="/login">
            <LinkBtn>인스타그램</LinkBtn>
          </Link>
        </BtnBox>

        <Wrapper>
          {InstaCarouselImg.map((e, i) => (
            <Image active={activeImg === i} key={i} src={e} />
          ))}
        </Wrapper>
      </MainBox>

      <TextBoxTwo>
        <h3>사용언어</h3>
        <span>HTML / CSS / JavaScript</span>
        <h3>라이브러리</h3>
        <span>react / </span>
        <span>styled-components / </span>
        <span>react-router-dom</span>
        <h3>작업툴</h3>
        <span>Visual Studio Code</span>
      </TextBoxTwo>
    </EachPortfolio>
  );
};

const EachPortfolio = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextBoxOne = styled.div`
  width: 30%;
`;
const TextBoxTwo = styled.div`
  width: 30%;
`;

const MainBox = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnBox = styled.div``;

const LinkBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: 100px;
  height: 30px;
  background: rgb(54, 172, 250);
  /* margin-bottom: 20px; */

  color: #fff;
  font-weight: bold;
  font-size: 14px;

  &:active {
    background: rgb(35, 107, 155);
  }
`;

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
  transition: opacity 1.4s ease-out;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      transition: opacity 1.4s ease-in;
    `}
`;

export default InstaPortfolioCarousel;

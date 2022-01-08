import styled, { css } from "styled-components";
import { useState } from "react";
import { ImgLetter, ImgLetterOpen } from "../../../assets/images";

const LetMEIntroduce = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <LetterBox>
        <StyledImgLetter active={!active} />
        <StyledImgLetterOpen active={active} />
      </LetterBox>
      <Title onClick={handleActive}>Help Me!</Title>
      <ContentsBox active={active}>
        <Contents>머물곳을 간절히 찾고 있습니다</Contents>
        <Contents>지구이름: 김동현</Contents>
        <Contents>지구나이: 34세</Contents>
        <Contents>신입</Contents>
        <Contents>HTML, CSS, JavsScript, React, JQuery</Contents>
        <Contents>다룰줄 압니다</Contents>
        <Contents>열심히 하겠습니다!</Contents>
        <Contents>grandsisters@gmail.com</Contents>
        <Contents>010-3848-2390</Contents>
      </ContentsBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;

  padding: 10px 0;
`;

const LetterBox = styled.div``;

const StyledImgLetter = styled(ImgLetter)`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 0;
  left: 20%;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;
const StyledImgLetterOpen = styled(ImgLetterOpen)`
  width: 35px;
  height: 35px;

  position: absolute;
  top: 5px;
  left: 20%;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const Title = styled.h2`
  height: 100%;
  margin: 0;
  border-radius: 15px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    color: black;
  }

  &:active {
    background: rgba(255, 255, 255, 0.7);
  }
`;

const ContentsBox = styled.div`
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const Contents = styled.p`
  font-weight: 700;
`;

export default LetMEIntroduce;

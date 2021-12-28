import React, { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleIndex = (i) => {
    // 이전 버튼을 눌렀고 && 현재 첫번째 사진이면
    //    -> 마지막 사진으로
    // 다음 버튼을 눌렀고 && 현재 마지막 사진이면
    //    -> 첫번째 사진으로
    // 둘다 아니면
    //    -> 평소대로 i값 더하기

    const lastIndex = data.length - 1;
    // const nextIndex =
    //   i === -1 && activeIndex === 0
    //     ? lastIndex
    //     : i === 1 && activeIndex === lastIndex
    //     ? 0
    //     : activeIndex + i;
    let nextIndex;
    if (i === -1 && activeIndex === 0) {
      nextIndex = lastIndex;
    } else if (i === 1 && activeIndex === lastIndex) {
      nextIndex = 0;
    } else {
      nextIndex = activeIndex + i;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <Wrapper>
      <ImageList active={activeIndex}>
        {data.map((image, index) => (
          <Image key={image} src={image} active={activeIndex === index} />
        ))}
      </ImageList>
      <BtnLeft onClick={() => handleIndex(-1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleIndex(1)}>다음</BtnRight>
      <IndexList>
        {data.map((image, index) => (
          <BtnIndex active={activeIndex === index} key={image} onClick={() => setActiveIndex(index)}>
            {index + 1}
          </BtnIndex>
        ))}
      </IndexList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  margin: 30px;
  overflow: hidden;
`;
const ImageList = styled.div`
  position: absolute;
  display: flex;
  transform: ${({ active }) => `translateX(${active * -800}px)`};
  transition: transform 0.5s ease-in;
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
  /* position: absolute;
  top: 0;
  left: 0; */
  /* opacity: ${({ active }) => !active && "0"}; */
  /* transition: opacity 0.5s ease-in; */
`;
const BtnLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;
const BtnRight = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const IndexList = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnIndex = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: ${({ active }) => active && "50%"};
  & + & {
    margin-left: 10px;
  }
`;

export default Carousel;

import React, { useState } from "react";
import styled, { css } from "styled-components";

const Carousel = () => {
  const imageList = [
    {
      id: 1,
      src: "https://og-data.s3.amazonaws.com/media/artworks/half/A0880/A0880-0016.jpg",
      active: true,
    },
    {
      id: 2,
      src: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
      active: false,
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
      active: false,
    },
    {
      id: 4,
      src: "https://www.sjpost.co.kr/news/photo/202007/53199_48342_4214.jpg",
      active: false,
    },
  ];
  const [ActiveIndex, setActiveIndex] = useState(1);

  const handleIndex = (index) => {
    const lastindex = imageList.length - 1;
    let nextIndex;
    if (index === -1 && ActiveIndex === 0) {
      nextIndex = lastindex;
    } else if (index === 1 && ActiveIndex === lastindex) {
      nextIndex = 0;
    } else {
      nextIndex = ActiveIndex + index;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <Wrapper>
      <List>
        {imageList.map((e, i) => (
          <Image key={e.id} src={e.src} active={ActiveIndex === i} />
        ))}
      </List>
      <BtnLeft onClick={() => handleIndex(-1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleIndex(1)}>다음</BtnRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  overflow: hidden;
`;
const List = styled.div`
  /* position: absolute;
  display: flex;
  width: 800px;
  height: 600px;
  transform: translateX(-1600px); */
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.4s ease-in;
`;

const BtnLeft = styled.button`
  position: absolute;
  left: 15px;
  top: 50%;
`;
const BtnRight = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
`;

export default Carousel;

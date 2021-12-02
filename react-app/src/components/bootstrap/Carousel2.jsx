import React, { useState } from "react";
import styled, { css } from "styled-components";

const Carousel2 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (e) => {
    const lastIndex = data.length - 1;
    let nextIndex;
    if (e === -1 && activeIndex === 0) {
      nextIndex = lastIndex;
    } else if (e === 1 && activeIndex === lastIndex) {
      nextIndex = 0;
    } else {
      nextIndex = activeIndex + e;
    }
    setActiveIndex(nextIndex);
  };
  const handlePage = (e) => {
    setActiveIndex(e);
  };

  return (
    <Wrapper>
      <List>
        {data.map((e, i) => (
          <Image src={e} active={activeIndex === i} />
        ))}
      </List>
      <PrevBtn onClick={() => handleIndex(-1)}>이전</PrevBtn>
      <NextBtn onClick={() => handleIndex(1)}>다음</NextBtn>
      <PageBtnWrapper>
        {data.map((e, i) => (
          <PageBtn onClick={() => handlePage(i)} active={activeIndex === i}>
            {i + 1}
          </PageBtn>
        ))}
      </PageBtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  overflow: hidden;
`;

const List = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.4s ease-in;
`;

const PrevBtn = styled.button`
  position: absolute;
  top: 50%;
`;

const NextBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
`;

const PageBtnWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`;

const PageBtn = styled.button`
  background: grey;

  ${({ active }) =>
    active &&
    css`
      border-radius: 20px;
    `}
`;

export default Carousel2;

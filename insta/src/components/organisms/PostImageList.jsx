import styled from "styled-components";
import { useState } from "react";

const PostImageList = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (n) => {
    setActiveIndex((prev) => prev + n);
  };

  return (
    <Wrapper>
      <PostList activeIndex={activeIndex}>
        {data.map(({ id, image }) => (
          <Post key={id} src={image} />
        ))}
      </PostList>
      {1 < data.length && (
        <>
          {0 !== activeIndex && <PrvBtn onClick={() => handleIndex(-1)}>{"<"}</PrvBtn>}
          {data.length - 1 !== activeIndex && <NxtBtn onClick={() => handleIndex(1)}>{">"}</NxtBtn>}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

const PostList = styled.ul`
  display: flex;
  align-items: center;
  transform: ${({ activeIndex }) => `translateX(${-612 * activeIndex}px)`};
  transition: transform 0.5s ease-in;
`;

const Post = styled.img`
  min-width: 100%;
`;

const Btn = styled.button`
  position: absolute;
  z-index: 0;
  top: 50%;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: 1px solid;
  opacity: 0.5;
  font-weight: bold;
  &:hover {
    opacity: 1;
  }
`;

const PrvBtn = styled(Btn)`
  left: 5px;
`;
const NxtBtn = styled(Btn)`
  right: 5px;
`;

export default PostImageList;

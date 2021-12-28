import styled, { css } from "styled-components";
import { useState } from "react";

const PostImageList = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const Nxt = ">";
  const Prv = "<";

  const handlePrv = () => {
    // if (activeIndex === 0) return setActiveIndex(data.length - 1);
    setActiveIndex(activeIndex - 1);
  };

  const handleNxt = () => {
    // if (data.length - 1 === activeIndex) return setActiveIndex(0);
    setActiveIndex(activeIndex + 1);
  };

  return (
    <Wrapper>
      <PostList>
        {data.map((e, i) => (
          <Post key={e.id} src={e.image} active={activeIndex === i} />
        ))}
      </PostList>
      {1 < data.length && (
        <>
          {0 !== activeIndex && <PrvBtn onClick={handlePrv}>{Prv}</PrvBtn>}
          {data.length - 1 !== activeIndex && <NxtBtn onClick={handleNxt}>{Nxt}</NxtBtn>}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 600px;
  position: relative;
`;

const PostList = styled.ul``;

const Post = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
`;

const Btn = styled.button`
  position: absolute;
  z-index: 100;
  top: 50%;
  border-radius: 25px;
  border: 2px solid;
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

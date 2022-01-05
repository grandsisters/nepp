import styled from "styled-components";
import { useState } from "react";

const FollowText = () => {
  const [changeFollow, setChangeFollow] = useState(false);

  const handleFollow = () => {
    setChangeFollow(!changeFollow);
  };

  return (
    <>
      <Wrapper onClick={handleFollow}>{changeFollow ? "팔로우 중" : "팔로우"}</Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default FollowText;

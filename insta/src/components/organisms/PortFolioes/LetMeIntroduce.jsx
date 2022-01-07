import styled from "styled-components";
import { ImgBear } from "../../../assets/images";

const LetMEIntroduce = () => {
  return (
    <Wrapper>
      <StyledImgBear />
      <Title>도와주세요!</Title>
      <Contents>살던 별이 없어졌습니다(ㅠ_ㅜ)</Contents>
      <Contents>일할곳을 간절히 찾고 있습니다</Contents>
      <Contents>지구나이 34세</Contents>
      <Contents>신입</Contents>
      <Contents>HTML, CSS, JavsScript,React,JQuery</Contents>
      <Contents>다룰줄 압니다</Contents>
      <Contents>열심히 하겠습니다!</Contents>
      <Contents>grandsisters@gmail.com</Contents>
      <Contents>010-3848-2390</Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledImgBear = styled(ImgBear)`
  width: 100px;
  height: 100px;
`;

const Title = styled.h2``;

const Contents = styled.p`
  font-weight: 700;
`;

export default LetMEIntroduce;

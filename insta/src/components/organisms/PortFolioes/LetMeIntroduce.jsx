import styled from "styled-components";

const LetMEIntroduce = () => {
  return (
    <Wrapper>
      <Title>도와주세요!</Title>
      <Contents>머물곳을 간절히 찾고 있습니다</Contents>
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

const Wrapper = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2``;

const Contents = styled.p`
  font-weight: 700;
`;

export default LetMEIntroduce;

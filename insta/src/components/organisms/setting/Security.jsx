import styled from "styled-components";
import { SecurityData } from "../../../data/SecurityData";

const Security = () => {
  return (
    <Wrapper>
      <Content>
        <MainText>
          최근 14일 동안 Instagram에서 보낸 보안 및 로그인 이메일이 여기에 표시됩니다. 이 리스트를 사용하여 회원님이 받은 이메일이 실제 Instagram에서 보낸 것이 맞는지 확인할 수 있습니다.
          <a href="https://help.instagram.com/760602221058803">더 알아보기.</a>
        </MainText>
      </Content>
      {SecurityData.map((e) => (
        <SubContent>
          <Text>{e.text}</Text>
          <Time>{e.time}</Time>
          <Reciver>{e.reciver}</Reciver>
        </SubContent>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

const MainText = styled.p`
  color: #8e8e8e;
`;

const SubContent = styled.div`
  line-height: 5px;

  border-bottom: 1px solid #dbdbdb;

  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`;

const Text = styled.p`
  font-weight: 600;
`;

const Time = styled.p``;

const Reciver = styled.p`
  color: #8e8e8e;
`;

export default Security;

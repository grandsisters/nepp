import styled from "styled-components";
import { NowActivityContent, LoginActiveContent } from "./";

const LoginActivity = () => {
  const NowData = { date: "지금 활동 중", time: "1분 전" };

  const LoginData = [
    { date: "지금 활동 중", time: "5시간 전" },
    { date: "2021년 6월 9일", time: "2021년 6월 9일" },
  ];

  return (
    <Wrapper>
      <Title>로그인 활동</Title>
      <Contents>
        <SubTitle>회원님이 맞나요?</SubTitle>
        <MapBox>
          <NowActivityContent data={NowData} />
          <BtnBox>
            <YesBtn>예</YesBtn>
            <NoBtn>아니요</NoBtn>
          </BtnBox>
        </MapBox>
      </Contents>
      <Contents>
        <SubTitle>로그인한 위치</SubTitle>

        {LoginData.map((e, i) => (
          <LoginActiveContent data={e} key={i} />
        ))}
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 50px 10px 50px;
`;

const Title = styled.h2`
  font-weight: 300;
`;

const Contents = styled.div``;

const SubTitle = styled.h3`
  font-size: 16px;
`;

const MapBox = styled.div`
  position: relative;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  overflow: hidden;
`;

const BtnBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  border: none;
  background: none;

  width: 50%;

  font-weight: bold;
  font-size: 14px;

  & + & {
    border-left: 1px solid #dbdbdb;
  }
`;

const YesBtn = styled(Btn)``;

const NoBtn = styled(Btn)``;

export default LoginActivity;

import styled from "styled-components";
import { ImgProfileLogo } from "../../assets/images";
import { OthersData, InformationO } from "../../data/MainRightData";

const MainRight = () => {
  return (
    <Container>
      <AccountWrapper>
        <ProfileWrapper>
          <ProfileImg src={ImgProfileLogo} />
          <IdWrapper>
            <AccountId>grandsisters</AccountId>
            <BelowId>김동현</BelowId>
          </IdWrapper>
        </ProfileWrapper>
        <ChangeBtn>전환</ChangeBtn>
      </AccountWrapper>
      <Recommend>
        <RecommendTitle>
          <Title>회원님을 위한 추천</Title>
          <SeeAllBtn>모두 보기</SeeAllBtn>
        </RecommendTitle>

        {OthersData.map((e) => (
          <AccountWrapper key={e.id}>
            <ProfileWrapper>
              <OtherImg src={e.image} />
              <IdWrapper>
                <AccountId>{e.id}</AccountId>
                <BelowId>{e.name}</BelowId>
              </IdWrapper>
            </ProfileWrapper>
            <ChangeBtn>팔로우</ChangeBtn>
          </AccountWrapper>
        ))}
      </Recommend>
      <InformationWrapper>
        {InformationO.map((e) => (
          <EachInform key={e.name}>{e.name}</EachInform>
        ))}
      </InformationWrapper>
      <InformBottom>© 2021 INSTAGRAM FROM META</InformBottom>
    </Container>
  );
};

const Container = styled.div`
  width: 290px;
  height: 980px;
  height: 500px;
  position: sticky;
  top: 90px;
  margin: 20px;
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 10px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Imgs = styled.img`
  border-radius: 50%;
`;

const ProfileImg = styled(Imgs)`
  width: 64px;
  height: 64px;
`;

const IdWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const AccountId = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const BelowId = styled.span`
  color: rgb(167, 159, 149);
  font-size: 12px;
`;

const Buttons = styled.button`
  color: #0095f6;
  font-size: 12px;
  font-weight: bold;
  border: none;
  background: #ffffff;
`;

const ChangeBtn = styled(Buttons)``;

const Recommend = styled.div``;

const RecommendTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
  font-size: 14px;
  font-weight: bold;
`;

const Title = styled.span`
  color: rgb(167, 159, 149);
`;

const SeeAllBtn = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const OtherImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const InformationWrapper = styled.ul`
  margin-top: 30px;
  display: inline-flexbox;
  flex-wrap: wrap;
`;

const EachInform = styled.li`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  color: rgb(167, 159, 149);

  &::after {
    content: "|";
  }
  &:last-child::after {
    content: "";
  }
`;

const InformBottom = styled.p`
  color: rgb(167, 159, 149);
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`;

export default MainRight;

import styled from "styled-components";
import { ImgProfileLogo } from "../../assets/images";

const MainRight = () => {
  const OthersData = [
    {
      image: "https://i.pinimg.com/736x/20/87/dc/2087dc617106100ab0716039317d3db8.jpg",
      id: "tomhardy",
      name: "회원님을 팔로우 합니다",
    },
    { image: "https://www.mens-hairstyle.com/wp-content/uploads/2020/01/1-thomas-shelby-haircut-2301202015301.jpg", id: "Thomas_Shelby", name: "Instagram 신규가입" },
    {
      image: "http://file3.instiz.net/data/cached_img/upload/2019/05/08/19/4862433a9fbdfa9bbb56c14e937eff17.jpg",
      id: "tomholland2013",
      name: "회원님을 팔로우 합니다",
    },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2ZBeM-vzNmOli_VOU8CjyaUiVAOvT4PeZg&usqp=CAU", id: "bts.bighitofficial", name: "인기" },
    {
      image:
        "https://ww.namu.la/s/9b01072ce3e497c070c99c7574fb3e3e50e01f8c6f915fef15cc8b75ae3a2d3984481c84da0949d33d32b52679cf53dfd7981f1a5c6678ab39c12da807b492ef3c7085135c824d072ac1310d7d8ac6d26d44128b2e6740547f08bdd7ca3bd186",
      id: "NF",
      name: "Instagram 신규가입",
    },
  ];

  const InformationO = [
    { name: "소개" },
    { name: "도움말" },
    { name: "홍보" },
    { name: "센터" },
    { name: "API" },
    { name: "채용 정보" },
    { name: "개인정보처리방침" },
    { name: "약관" },
    { name: "위치" },
    { name: "인기" },
    { name: "계정" },
    { name: "해시태그" },
    { name: "언어" },
  ];

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
  /* background: #dbdbdb; */
  position: sticky;
  top: 90px;
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

const AccountId = styled.span``;

const BelowId = styled.span`
  color: rgb(167, 159, 149);
  font-size: 12px;
`;

const Buttons = styled.span`
  color: #0095f6;
  font-size: 12px;
`;

const ChangeBtn = styled(Buttons)``;

const Recommend = styled.div``;

const RecommendTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
`;

const Title = styled.span`
  color: rgb(167, 159, 149);
`;

const SeeAllBtn = styled.span`
  font-size: 12px;
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

  &::after {
    content: "|";
  }
  &:last-child::after {
    content: "";
  }
`;

const InformBottom = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`;

export default MainRight;

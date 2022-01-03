import styled from "styled-components";

const ActivityDropdown = () => {
  const ActivityData = [
    { date: "이번 주", img: "https://i.pinimg.com/736x/20/87/dc/2087dc617106100ab0716039317d3db8.jpg", name: "tomhardy" },
    { date: "이번 달", img: "https://www.mens-hairstyle.com/wp-content/uploads/2020/01/1-thomas-shelby-haircut-2301202015301.jpg", name: "Thomas_Shelby" },
    { date: "이전 활동", img: "http://file3.instiz.net/data/cached_img/upload/2019/05/08/19/4862433a9fbdfa9bbb56c14e937eff17.jpg", name: "tomholland2013" },
  ];

  return (
    <DropdownWrapper>
      <ActivityLists>
        {ActivityData.map((e) => (
          <ActivityWrapper>
            <ActivityDate>{e.date}</ActivityDate>
            <EachActivity>
              <EachWrapper>
                <ActivityImg src={e.img} />
                <TextWrapper>
                  <ActicityText>{e.name}님이 회원님을 팔로우하기 시작했습니다.</ActicityText>
                </TextWrapper>
              </EachWrapper>
              <ActivityBtn>팔로우</ActivityBtn>
            </EachActivity>
          </ActivityWrapper>
        ))}
      </ActivityLists>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  width: 500px;
  height: 362px;
  border: 1px solid #dbdbdb;
  position: absolute;
  top: 40px;
  right: -8px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  border-radius: 2%;
  background: #fff;
  overflow: auto;
`;

const ActivityLists = styled.ul`
  white-space: nowrap;
`;
const ActivityWrapper = styled.div`
  padding: 3px 10px;
`;
const ActivityDate = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const EachActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EachWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ActivityImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 15px;
`;

const TextWrapper = styled.div`
  width: 338px;
  height: 37px;
  white-space: normal;
`;

const ActicityText = styled.span`
  font-size: 14px;
`;
const ActivityBtn = styled.button`
  width: 62px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #0095f6;
  color: white;
  font-weight: bolder;
`;

export default ActivityDropdown;

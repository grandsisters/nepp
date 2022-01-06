import styled from "styled-components";

const ActivityDropdown = ({ onClose }) => {
  const ActivityData = [
    { date: "이번 주", img: "https://i.pinimg.com/736x/20/87/dc/2087dc617106100ab0716039317d3db8.jpg", name: "tomhardy" },
    { date: "이번 달", img: "https://www.mens-hairstyle.com/wp-content/uploads/2020/01/1-thomas-shelby-haircut-2301202015301.jpg", name: "Thomas_Shelby" },
    { date: "이전 활동", img: "http://file3.instiz.net/data/cached_img/upload/2019/05/08/19/4862433a9fbdfa9bbb56c14e937eff17.jpg", name: "tomholland2013" },
  ];

  return (
    <>
      <BackDrop onClick={onClose} />
      <DropdownWrapper>
        <ActivityLists>
          {ActivityData.map((e, i) => (
            <ActivityWrapper key={i}>
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
        <LittleThis />
      </DropdownWrapper>
    </>
  );
};

const DropdownWrapper = styled.div`
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  position: absolute;
  top: 40px;
  right: -8px;
  z-index: 0;
  border-radius: 10px;
`;

const ActivityLists = styled.ul`
  background: #fff;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
`;
const ActivityWrapper = styled.div`
  padding: 3px 10px;

  &:last-child {
    border-top: 1px solid #dbdbdb;
  }
`;
const ActivityDate = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const EachActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
  margin: 0 10px;
`;

const LittleThis = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  top: -8px;
  right: 77px;
  background: #fff;
`;
const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: default;
`;

export default ActivityDropdown;

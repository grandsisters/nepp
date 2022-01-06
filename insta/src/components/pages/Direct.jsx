import styled from "styled-components";
import { useState, useEffect } from "react";
import { ImgPaperAirplane, ImgWriteMessage } from "../../assets/images";
import ShortData from "../../data/ShortData";
import ModalAccountChange from "../organisms/ModalAccountChange";
import ModalWriteMessage from "../organisms/ModalWriteMessage";

const Direct = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleModalTwo = () => {
    setShowModalTwo(!showModalTwo);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);
  useEffect(() => {
    document.body.style.overflow = showModalTwo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModalTwo]);

  return (
    <>
      {showModal && <ModalAccountChange onClose={handleModal} />}
      {showModalTwo && <ModalWriteMessage onClose={handleModalTwo} />}
      <Background>
        <Wrapper>
          <DirectBox>
            <LeftSide>
              <LeftSideTop>
                <IdWrapper onClick={handleModal}>
                  <ID>grandsisters</ID>
                  <UnderArrow>〉</UnderArrow>
                </IdWrapper>
                <WriteMessage onClick={handleModalTwo} />
              </LeftSideTop>

              <LeftSideList>
                {ShortData.map((e, i) => (
                  <Subject key={i}>
                    <SubjectImg src={e.img} />
                    <SubjectInform>
                      <SubjectId>{e.id}</SubjectId>
                      <SubjectText>{e.text}</SubjectText>
                    </SubjectInform>
                  </Subject>
                ))}
              </LeftSideList>
            </LeftSide>
            <RightSide>
              <ImgPaperAirplane style={{ width: "96px", height: "96px" }} />
              <MyMessage>내 메시지</MyMessage>
              <Annotation>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</Annotation>
              <SendMessageBtn onClick={handleModalTwo}>메시지 보내기</SendMessageBtn>
            </RightSide>
          </DirectBox>
        </Wrapper>
      </Background>
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 0 20px 0;

  width: 100%;
  height: 100%;
  max-width: 935px;
  margin: 0 auto;
`;

const DirectBox = styled.div`
  border: 1px solid #dbdbdb;
  margin-top: 10px;
  display: flex;
  height: 100%;

  background: #fff;
`;

const LeftSide = styled.div`
  height: 100%;
  width: 425px;
  border-right: 1px solid #dbdbdb;
`;

const IdWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #dbdbdb;
  }
`;

const UnderArrow = styled.span`
  font-size: 20px;
  transform: rotate(90deg);
`;

const ID = styled.div`
  padding: 0 10px;
`;

const WriteMessage = styled(ImgWriteMessage)`
  &:hover {
    cursor: pointer;
  }
`;

const LeftSideTop = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
`;

const LeftSideList = styled.div`
  width: 100%;
  height: 800px;
  padding-top: 8px;
`;

const Subject = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0;
`;
const SubjectImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;
const SubjectInform = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const SubjectId = styled.p`
  font-weight: bold;
  margin: 0;
`;
const SubjectText = styled.p`
  margin: 0;
`;

const RightSide = styled.div`
  width: 750px;
  height: 860px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyMessage = styled.h2``;

const Annotation = styled.p``;

const SendMessageBtn = styled.button`
  border: none;
  border-radius: 6px;
  background: #0095f6;
  color: #fff;

  width: 110px;
  height: 32px;

  padding: 5px 9px;

  font-weight: bold;

  &:active {
    background: #38acfa;
  }
`;

export default Direct;

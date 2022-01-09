import styled from "styled-components";
import { ImgXBtn } from "../../assets/images";

const ModalWriteMessage = ({ onClose }) => {
  return (
    <Container>
      <ModalBack onClick={onClose} />
      <Modal>
        <ModalTitle>
          <ImgXBtn onClick={onClose} />
          <TitleText> 새로운 메시지</TitleText>
          <ModalBtn>다음</ModalBtn>
        </ModalTitle>
        <ModalContent>
          <Recive>
            <ReciveTitle>받는 사람:</ReciveTitle>
            <SearchReciver placeholder="검색..." />
          </Recive>

          <Recommand>
            <RecommandTitle>추천</RecommandTitle>
            <RecommandList>계정을 찾을 수 없습니다.</RecommandList>
          </Recommand>
        </ModalContent>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: black;
  opacity: 0.7;
`;

const Modal = styled.div`
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #dbdbdb;
`;

const TitleText = styled.p`
  font-weight: bold;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Recive = styled.div`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  padding: 5px 10px;
`;

const ReciveTitle = styled.p`
  font-weight: bold;
`;

const SearchReciver = styled.input`
  border: none;
  padding: 10px 5px;
  width: 100%;

  &::placeholder {
    font-weight: bold;
    color: #dbdbdb;
  }
`;

const Recommand = styled.div`
  width: 100%;
  height: 400px;
  padding: 5px 10px;
`;

const RecommandTitle = styled.p`
  font-weight: bold;
`;

const RecommandList = styled.div`
  color: #919191;
  padding: 10px 5px;
`;

const ModalBtn = styled.button`
  border: none;
  background: #fff;
  color: #0095f6;
  font-weight: bold;
  font-size: 14px;

  &:active {
    color: #4db3f7;
  }
`;

export default ModalWriteMessage;

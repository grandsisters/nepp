import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgXBtn, ImgCheck, ImgProfileLogo } from "../../assets/images";

const ModalAccountChange = ({ onClose }) => {
  return (
    <Container>
      <ModalBack onClick={onClose} />
      <Modal>
        <ModalTitle>
          <TitleText> 계정 전환</TitleText>
          <XBtnBox>
            <ImgXBtn onClick={onClose} />
          </XBtnBox>
        </ModalTitle>
        <ModalContent>
          <IdBox>
            <ProfileImg src={ImgProfileLogo} />
            <Id>grandsisters</Id>
          </IdBox>
          <ImgCheck />
        </ModalContent>
        <Link to="/login">
          <ModalBtnBox>
            <ModalBtn>기존 계정으로 로그인</ModalBtn>
          </ModalBtnBox>
        </Link>
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
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
`;

const TitleText = styled.p`
  font-weight: bold;
`;

const XBtnBox = styled.div`
  position: absolute;
  right: 15px;

  cursor: pointer;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 100px 20px;
  border-bottom: 1px solid #dbdbdb;
`;

const IdBox = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Id = styled.p`
  font-weight: 500;
`;

const ModalBtnBox = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
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

export default ModalAccountChange;

import styled from "styled-components";

const ModalPostList = ({ onClose }) => {
  return (
    <Container>
      <ModalBack onClick={onClose} />
      <Modal>
        <Report>신고</Report>
        <CancelFollow>팔로우 취소</CancelFollow>
        <MoveTo>게시물로 이동</MoveTo>
        <Share>퍼가기</Share>
        <Cancel onClick={onClose}>취소</Cancel>
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
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const buttons = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  font-size: 14px;
  background: #fff;

  &:hover {
    background: #dddddd;
  }

  & + & {
    border-top: 1px solid #dbdbdb;
  }
`;

const Report = styled(buttons)`
  color: red;
  font-weight: bold;
  border-radius: 25px 25px 0 0;
`;
const CancelFollow = styled(buttons)`
  color: red;
  font-weight: bold;
`;
const MoveTo = styled(buttons)``;
const Share = styled(buttons)``;
const Cancel = styled(buttons)`
  border-radius: 0 0 25px 25px;
  font-weight: bold;
`;

export default ModalPostList;

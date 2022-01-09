import { useRef, useState } from "react";
import styled from "styled-components";
import { ImgModalImage, ImgModalX } from "../../assets/images";

const ModalAddPost = ({ onClose }) => {
  const inputActiveEl = useRef(null);
  const [imageData, setImageData] = useState(null);

  const handleContent = (e) => {
    e.preventDefault();
    inputActiveEl.current.click();
  };

  const hadleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <ModalBack onClick={onClose} />
      <BtnX>
        <ImgModalX style={{ cursor: "pointer" }} onClick={onClose} />
      </BtnX>

      <Modal>
        {!imageData && (
          <>
            <ModalTitle>새 게시물 만들기</ModalTitle>

            <ModalContent>
              <ImgModalImage />
              <ModalText>사진과 동영상을 여기에 끌어다 놓으세요</ModalText>
              <ModalFile type="file" ref={inputActiveEl} accept="image/*" onChange={hadleFileChange} />
              <ModalBtn onClick={handleContent}>컴퓨터에서 선택</ModalBtn>
            </ModalContent>
          </>
        )}
        {imageData && (
          <>
            <ModalTitle>공유하기</ModalTitle>
            <ModalContent>
              <PreviewImage src={imageData} />
            </ModalContent>
          </>
        )}
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const ModalBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: black;
  opacity: 0.7;
`;

const BtnX = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 16px;
  height: 16px;
  z-index: 2;
`;

const Modal = styled.div`
  position: absolute;
  border: 1px solid black;
  border-radius: 16px;
  z-index: 2;
  background: #fff;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  overflow: hidden;
`;

const ModalTitle = styled.p`
  text-align: center;
  font-weight: bold;
`;

const ModalContent = styled.form`
  width: 710px;
  height: 710px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalText = styled.h2``;

const ModalBtn = styled.button`
  width: 120px;
  height: 30px;
  background: #0095f6;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:active {
    background: #0074c2;
  }
`;

const ModalFile = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default ModalAddPost;

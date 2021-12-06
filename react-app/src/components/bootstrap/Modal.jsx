import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [name, setName] = useState("");

  const anotherWorld = () => {
    setActiveModal(true);
  };
  const handleNo = () => {
    setFadeOut(true);

    setTimeout(() => {
      setActiveModal(false);
      setFadeOut(false);
    }, 300);
  };
  const handleYes = () => {
    setFadeOut(true);

    setTimeout(() => {
      setActiveModal(false);
      setFadeOut(false);
    }, 300);
  };

  return (
    <>
      <ModalFire onClick={anotherWorld}>모달 커몬</ModalFire>
      <p>이름:{name}</p>
      {activeModal && (
        <>
          <BackDrop onClick={handleNo} />
          <Container fadeOut={fadeOut}>
            <HeadLine>
              <Title>이세계로 전생</Title>
              <XBtn onClick={handleNo}>X</XBtn>
            </HeadLine>
            <Content>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="이름을 입력하십시오." />
            </Content>
            <YesBtn onClick={handleYes}>예</YesBtn>
            <NoBtn onClick={handleNo}>아니오</NoBtn>
          </Container>
        </>
      )}
    </>
  );
};

const ModalFire = styled.button``;

const BackDropOp = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 0.8
  }
`;

const BackDrop = styled.div`
  animation: ${BackDropOp} 0.3s ease-in;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalSlide = keyframes`
  from {
    transform: translate(-50%, -30px)
  }
  to{
    transform: translate(-50%, 0)
  }
`;

const Container = styled.div`
  animation: ${ModalSlide} 0.3s ease-in;
  width: 350px;
  height: 150px;
  background: white;
  border-radius: 4px;
  border: 1px solid white;
  position: fixed;
  z-index: 1;
  top: 5%;
  left: 50%;
  transform: ${({ fadeOut }) => (fadeOut ? "translate(-50%, -30px)" : "translateX(-50%)")};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;

  input {
    border: none;
    width: 100%;
    background: black;
  }
`;

const HeadLine = styled.div`
  position: relative;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const Title = styled.span`
  font-weight: bolder;
`;

const XBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 15px;
  border-bottom: 1px solid black;
`;

const Btn = styled.button`
  position: absolute;
  bottom: 10px;
  width: 60px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const YesBtn = styled(Btn)`
  right: 80px;
  background: blue;

  & > a {
    text-decoration: none;
    color: white;
  }
`;

const NoBtn = styled(Btn)`
  right: 10px;
  background: grey;
`;

export default Modal;

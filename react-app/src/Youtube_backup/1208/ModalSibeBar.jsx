import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "./backdrop";

const ModalSideBar = ({ onClose }) => {
  const [fadeout, setFadeout] = useState(false);

  const handleBackdrop = () => {
    setFadeout(!fadeout);
    setTimeout(onClose, 300);
  };
  return (
    <>
      <Sidebar fadeout={fadeout}>asdsadasd</Sidebar>
      <Backdrop fadeout={fadeout} onClick={handleBackdrop} />
    </>
  );
};

const SidebarAni = keyframes`
from {
  left: -240px;
}
to {
  left:0
}
`;

const Sidebar = styled.div`
  animation: ${SidebarAni} 3s ease-in;
  width: 240px;
  height: 100vh;
  position: fixed;
  background: grey;
  z-index: 1;
  top: 0;
  left: ${({ fadeout }) => (fadeout ? "left: -240px;" : "left:0")};
  transition: transform 0.3s ease-out;
`;

export default ModalSideBar;

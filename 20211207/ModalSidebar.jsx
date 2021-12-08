import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "../bootstrap/backdrop";

const ModalSidebar = ({ onClose }) => {
  const [collapse, setCollapse] = useState(false);
  const handleClose = () => {
    setCollapse(true);
    setTimeout(onClose, 300);
  };

  return (
    <>
      <Sidebar collapse={collapse}>asdf</Sidebar>
      <Backdrop collapse={collapse} onClick={handleClose} />
    </>
  );
};

const slideSidebar = keyframes`
  from {
    left: -240px;
  }
  to {
    left: 0;
  }
`;

const Sidebar = styled.div`
  animation: ${slideSidebar} 0.3s ease-out;
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ collapse }) => (collapse ? "-240px" : "0")};
  transition: left 0.3s ease-out;
  background: #fff;
  z-index: 100;
`;
export default ModalSidebar;

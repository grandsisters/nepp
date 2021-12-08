import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "./backdrop";
import DropdownProfileMenu from "./DropdownProfileMenu";

const firstMenuData = [
  {
    image: "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-06-256.png",
    name: "디자인: 기기테마",
  },
  {
    image: "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-06-256.png",
    name: "디자인: 기기테마",
  },
];

const ModalSidebar = ({ onClose }) => {
  const [collapse, setCollapse] = useState(false);
  const handleClose = () => {
    setCollapse(true);
    setTimeout(onClose, 300);
  };

  return (
    <>
      <Sidebar collapse={collapse}>
        <DropdownProfileMenu data={firstMenuData} />
      </Sidebar>
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

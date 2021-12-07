import React, { useState } from "react";
import styled, { css } from "styled-components";

const ModalSideBar = ({ onClose }) => {
  // const [backdropOn, setBackdropOn] = useState(false);

  const handleBackdrop = () => {
    setTimeout(onClose(), 300);
  };
  return (
    <>
      <SidebarWrapper>
        <Sidebar>asdsadasd</Sidebar>
        <Backdrop onClick={handleBackdrop} />
      </SidebarWrapper>
    </>
  );
};
const SidebarWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background: grey;
  z-index: 1;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default ModalSideBar;

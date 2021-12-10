import React from "react";
import styled from "styled-components";

const Backdrop = () => {
  return <BackdropC />;
};

const BackdropC = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default Backdrop;

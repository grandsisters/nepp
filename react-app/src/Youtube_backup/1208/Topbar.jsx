import React from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";
import imgHamburger from "../assets/images/hamburger.png";
import youtubeLogo from "../assets/images/YouTube_logo.png";

const Topbar = () => {
  return (
    <Container>
      <img src={imgHamburger} alt="hamburger" />
      youtube
      <DropdownWrapper>
        <BtnProfile>
          <ImgProfile />
          <DropdownProfile />
        </BtnProfile>
      </DropdownWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const BtnProfile = styled.div`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const ImgProfile = styled.image`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default Topbar;

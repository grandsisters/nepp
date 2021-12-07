import React from "react";
import styled, { css } from "styled-components";
import DropdownProfile from "./DropdownProfile";

const Topbar = () => {
  return (
    <>
      <Container>
        youtube
        <DropdownWrapper>
          <BtnProfile>
            <ImgProfile />
            <DropdownProfile />
          </BtnProfile>
        </DropdownWrapper>
      </Container>
    </>
  );
};

const Container = styled.div``;

const DropdownWrapper = styled.div``;

const BtnProfile = styled.div``;

const ImgProfile = styled.image``;

export default Topbar;

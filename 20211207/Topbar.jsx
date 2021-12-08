import React from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";

const Topbar = () => {
  return (
    <>
      <Container>
        youtube
        <DropdownWrapper>
          <BtnProfile>
            <ImgProfile src="https://yt3.ggpht.com/3SshyAt2hdIsA4v1VpRKwmvCSr8Uw0k0HQyERY899L_vAL86hddK3XFOEgEee1rRk0O-Y0qVJw=s88-c-k-c0x00ffffff-no-rj-mo" />
          </BtnProfile>
          <DropdownProfile />
        </DropdownWrapper>
      </Container>
    </>
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
const BtnProfile = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
const ImgProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default Topbar;

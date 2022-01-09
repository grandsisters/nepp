import React from "react";
import styled from "styled-components";
import { SignupMB, SignupSB, AppDownload } from "../organisms";

const Signup = () => {
  return (
    <Wrapper>
      <SignupMB />
      <SignupSB />
      <AppDownload />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Signup;

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
  position: fixed;
  top: 10%;
  left: 35%;
`;

export default Signup;

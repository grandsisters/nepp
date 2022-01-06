import React from "react";
import styled from "styled-components";
import { LoginMB, LoginSB, AppDownload, Carousel } from "../organisms";

const Login = () => {
  return (
    <Wrapper>
      <Carousel />
      <LoginBlock>
        <LoginMB />
        <LoginSB />
        <AppDownload />
      </LoginBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 25%;
  display: flex;
  align-items: center;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;

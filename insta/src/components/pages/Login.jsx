import React from "react";
import styled from "styled-components";
import { Login_MB, Login_SB, AppDownload } from "../organisms";

const Login = () => {
  return (
    <Wrapper>
      <Login_MB />
      <Login_SB />
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

export default Login;

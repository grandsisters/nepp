import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupSB = () => {
  return (
    <SecondBlock>
      <p>
        계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </SecondBlock>
  );
};

const SecondBlock = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 60px;
  margin-top: 10px;
  text-align: center;

  & > p > a {
    text-decoration: none;
    color: rgb(54, 172, 250);
  }
`;

export default SignupSB;

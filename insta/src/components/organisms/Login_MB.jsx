import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AlsoDiv } from "../molecules";

const Login_MB = () => {
  return (
    <MainBlock>
      <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
      <LoginForm>
        <IdInput placeholder="전화번호, 사용자 이름 또는 이메일" />
        <PwInput placeholder="비밀번호" />
        <Link to="/main">
          <LoginBtn>로그인</LoginBtn>
        </Link>
      </LoginForm>
      <FormBottom>
        <AlsoDiv />
        <Etc>
          <Link to="/main">Facebook으로 로그인</Link>

          <Link to="/signup">비밀번호를 잊으셨나요?</Link>
        </Etc>
      </FormBottom>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 382px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 175px;
  height: 57;
  margin: 22px auto 12px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 258px;
  height: 36px;
  border-radius: 5px;
`;

const IdInput = styled(Input)``;

const PwInput = styled(Input)`
  margin-top: 5px;
`;

const LoginBtn = styled.button`
  width: 268px;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  background: rgb(38, 73, 99);
  color: white;
  font-weight: bolder;
`;

const FormBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Etc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: rgb(148, 177, 207);
  }

  a + a {
    margin-top: 15px;
  }
`;

export default Login_MB;

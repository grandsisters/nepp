import React from "react";
import styled from "styled-components";
import { AlsoDiv } from "../molecules";

const Signup_MB = () => {
  return (
    <MainBlock>
      <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
      <SignupForm>
        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <FacebookLoginBtn>Facebook으로 로그인</FacebookLoginBtn>
        <AlsoDiv />
        <PhoneNumberInput placeholder="휴대폰 번호 또는 이메일 주소" />
        <NameInput placeholder="성명" />
        <IdInput placeholder="사용자 이름" />
        <PwInput placeholder="비밀번호" />
        <SignupBtn>가입</SignupBtn>
      </SignupForm>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 175px;
  height: 57;
  margin: 22px auto 12px;
`;

const Input = styled.input`
  width: 258px;
  height: 36px;
  border-radius: 5px;
  margin-top: 10px;

  & + & {
    margin-top: 10px;
  }
`;

const FacebookLoginBtn = styled.button`
  width: 270px;
  height: 36px;
  border: rgb(44, 129, 197);
  border-radius: 5px;
  background: rgb(44, 129, 197);
  color: white;
`;

const PhoneNumberInput = styled(Input)``;

const NameInput = styled(Input)``;

const IdInput = styled(Input)``;

const PwInput = styled(Input)``;

const SignupBtn = styled.button`
  width: 268px;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-top: 25px;
  background: rgb(38, 73, 99);
  color: white;
  font-weight: bolder;
`;

export default Signup_MB;

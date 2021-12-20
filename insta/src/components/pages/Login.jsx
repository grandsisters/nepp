import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <MainBlock>
        <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        <LoginForm>
          <IdInput placeholder="전화번호, 사용자 이름 또는 이메일" />
          <PwInput placeholder="비밀번호" />
          <LoginBtn>로그인</LoginBtn>
        </LoginForm>
        <FormBottom>
          <AlsoDiv>
            <Horizion />
            <p>또는</p>
            <Horizion />
          </AlsoDiv>
          <Etc>
            <a href="https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221hzp25txt8q7p18b1e5r16lfb5h1vuzpt2qjwdrn16xw5fu1ghbb2h%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D801aafd9-6904-4295-94a8-14b318d91f02%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221hzp25txt8q7p18b1e5r16lfb5h1vuzpt2qjwdrn16xw5fu1ghbb2h%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=touch&locale=ko_KR&pl_dbl=0&refsrc=deprecated&_rdr">
              Facebook으로 로그인
            </a>
            <a href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
          </Etc>
        </FormBottom>
      </MainBlock>
      <SecondBlock>
        <p>
          계정이 없으신가요? <a href="https://www.instagram.com/accounts/signup/phone">가입하기</a>
        </p>
      </SecondBlock>
      <ThirdBlock>
        <p>앱을 다운로드 하세요</p>
        <AppLink>
          <AppleLink>
            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
              <img src="https://theme.zdassets.com/theme_assets/93069/a931dd189faa406800bbb94332e544a6312d0b9b.png" alt="appstore" />
            </a>
          </AppleLink>
          <GoogleLink>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=42432E2E-9BFD-42D5-B881-FD316FD56FA8&utm_content=lo&utm_medium=badge">
              <img
                src="data:image/png;base64,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"
                alt="googleplay"
              />
            </a>
          </GoogleLink>
        </AppLink>
      </ThirdBlock>
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

const Horizion = styled.div`
  width: 103px;
  border: 1px solid black;
`;

const AlsoDiv = styled.div`
  width: 268px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
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

const ThirdBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppLink = styled.div`
  display: flex;

  div + div {
    margin-left: 5px;
  }
`;

const AppleLink = styled.div`
  img {
    width: 136px;
    height: 40px;
  }
`;

const GoogleLink = styled.div`
  img {
    width: 136px;
    height: 40px;
  }
`;

export default Login;

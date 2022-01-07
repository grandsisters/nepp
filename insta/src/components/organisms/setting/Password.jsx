import styled from "styled-components";
import { ImgProfileLogo } from "../../../assets/images";

const Password = () => {
  const Btn = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <ProfilePhotoBox>
        <ProfileImg src={ImgProfileLogo} />
        <ProfileId>grandsisters</ProfileId>
      </ProfilePhotoBox>
      <MainBox>
        <EachInputBox>
          <Label>이전 비밀번호</Label>
          <InputBox>
            <Input readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>새 비밀번호</Label>
          <InputBox>
            <Input readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>새 비밀번호 확인</Label>
          <InputBox>
            <Input readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label></Label>
          <LastInputBox>
            <SubmissionBtn onClick={Btn}>비밀번호 변경</SubmissionBtn>
            <AccountInActivityBtn onClick={Btn}>비밀번호를 잊으셨나요?</AccountInActivityBtn>
          </LastInputBox>
        </EachInputBox>
      </MainBox>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ProfilePhotoBox = styled.div`
  display: flex;
  margin: 32px 0 20px 126px;
`;

const ProfileImg = styled.img`
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-right: 32px;
`;

const ProfileId = styled.span`
  font-weight: 400;
  font-size: 25px;
`;

const MainBox = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

const EachInputBox = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 194px;
  margin-top: 5px;
  padding: 0 32px;
  text-align: end;
  font-weight: bold;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #fafafa;
`;

const LastInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  background: rgba(0, 149, 246, 0.3);
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
  width: fit-content;
  padding: 5px 10px;

  &:hover {
    cursor: default;
  }
`;

const SubmissionBtn = styled(Btn)`
  margin-bottom: 30px;
`;
const NoBackgroundBtn = styled.button`
  border: none;
  background: #fff;
  color: #0095f6;
  font-weight: bold;
  padding: 0;
`;

const AccountInActivityBtn = styled(NoBackgroundBtn)``;

export default Password;

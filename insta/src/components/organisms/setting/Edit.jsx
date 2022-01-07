import styled from "styled-components";
import { ImgProfileLogo } from "../../../assets/images";

const Edit = () => {
  const Btn = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <ProfilePhotoBox>
        <ProfileImg src={ImgProfileLogo} />
        <IdBox>
          <ProfileId>grandsisters</ProfileId>
          <ProfilePhotoChange onClick={Btn}>프로필 사진 바꾸기</ProfilePhotoChange>
        </IdBox>
      </ProfilePhotoBox>
      <MainBox>
        <EachInputBox>
          <Label>이름</Label>
          <InputBox>
            <Input value={"김동현"} readOnly />
            <Explain>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</Explain>
            <Explain>이름은 14일 안에 두번만 변경할 수 있습니다.</Explain>
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>사용자 이름</Label>
          <InputBox>
            <Input value={"grandsisters"} readOnly />
            <Explain>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</Explain>
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>웹사이트</Label>
          <InputBox>
            <Input placeholder="웹사이트" readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>소개</Label>
          <InputBox>
            <InputArea readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label></Label>
          <InputBox>
            <ExplainTitle>개인정보</ExplainTitle>
            <Explain>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</Explain>
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>이메일</Label>
          <InputBox>
            <Input value={"grandsisters@gmail.com"} readOnly />
            <ConfirmBtn onClick={Btn}>이메일 확인</ConfirmBtn>
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>전화번호</Label>
          <InputBox>
            <Input placeholder="전화번호" readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>성별</Label>
          <InputBox>
            <Input placeholder="성별" readOnly />
          </InputBox>
        </EachInputBox>
      </MainBox>
      <MainBox>
        <EachInputBox>
          <Label>비슷한 계정 추천</Label>
          <CheckInputBox>
            <label>
              <CheckBox type="checkbox" />
              <CheckBoxText>팔로우할 만한 비슷한 계정을 추천할 때 회원님의 계정을 포함합니다.</CheckBoxText>
            </label>
          </CheckInputBox>
        </EachInputBox>
      </MainBox>
      <MainBox style={{ marginBottom: "20px" }}>
        <EachInputBox>
          <Label></Label>
          <LastInputBox>
            <SubmissionBtn onClick={Btn}>제출</SubmissionBtn>
            <AccountInActivityBtn onClick={Btn}>계정을 일시적으로 비활성화</AccountInActivityBtn>
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

const IdBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileId = styled.span``;

const NoBackgroundBtn = styled.button`
  border: none;
  background: #fff;
  color: #0095f6;
  font-weight: bold;
  padding: 0;
`;

const ProfilePhotoChange = styled(NoBackgroundBtn)``;

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
  width: 350px;
`;

const InputArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

const ExplainTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #838383;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

const Explain = styled.span`
  font-size: 12px;
  color: #838383;
  margin-top: 10px;
`;

const Btn = styled.button`
  background: #0095f6;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
  width: fit-content;
  padding: 5px 10px;

  &:active {
    background: #35aaf8;
  }
`;

const ConfirmBtn = styled(Btn)`
  margin-top: 10px;
`;

const CheckInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input``;

const CheckBoxText = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

const LastInputBox = styled.div``;

const SubmissionBtn = styled(Btn)`
  margin-right: 50px;
`;

const AccountInActivityBtn = styled(NoBackgroundBtn)``;

export default Edit;

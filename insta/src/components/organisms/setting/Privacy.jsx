import styled from "styled-components";
import { CheckBox, LinkBox } from "../../../data/PrivacyData";

const Privacy = () => {
  return (
    <Wrapper>
      {CheckBox.map((e) => (
        <Box>
          <Title>{e.title}</Title>
          <Label>
            <Checkbox type="checkbox" />
            {e.checkname}
          </Label>
          <Text>{e.text}</Text>
        </Box>
      ))}

      <Box>
        <Title>내가 나온 사진</Title>
        <Label>
          <Checkbox type="radio" name="radio" />
          자동으로 추가
        </Label>
        <Label>
          <Checkbox type="radio" name="radio" />
          수동으로 추가
        </Label>
        <Text>
          회원님이 나온 사진을 프로필에 추가할 방법을 선택하세요. <LinkText>회원님이 나온 사진에 대해 더 알아보기</LinkText>
        </Text>
      </Box>

      {LinkBox.map((e) => (
        <Box style={{ paddingBottom: "20px" }}>
          <Title>{e.title}</Title>
          <LinkText>{e.linkname}</LinkText>
        </Box>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 50px;
`;

const Box = styled.div`
  border-bottom: 1px solid #dbdbdb;

  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.h2`
  font-weight: 400;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-content: center;
`;

const Checkbox = styled.input``;

const Text = styled.p`
  color: #8e8e8e;
  font-size: 14px;
`;

const LinkText = styled.span`
  color: #0095f6;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export default Privacy;

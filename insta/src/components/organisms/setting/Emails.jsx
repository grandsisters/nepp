import styled from "styled-components";

const Emails = () => {
  const checkBoxes = [
    { name: "의견 이메일", text: "Instagram에서 의견을 보내보세요." },
    { name: "알림 이메일", text: "확인하지 않은 알림을 받아보세요." },
    { name: "제품 이메일", text: "Instagram 도구에 관한 팁을 확인해보세요." },
    { name: "뉴스 이메일", text: "Instagram의 새로운 기능에 대해 자세히 알아보세요." },
  ];

  return (
    <>
      <Wrapper>
        <Title>받아보기:</Title>
        <CheckBox>
          {checkBoxes.map((e, i) => (
            <EachCheckBox key={i}>
              <CheckCombie>
                <label>
                  <CheckInput type="checkbox" />
                  <CheckInputSpan>{e.name}</CheckInputSpan>
                </label>
              </CheckCombie>
              <Text>{e.text}</Text>
            </EachCheckBox>
          ))}
        </CheckBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 10px 50px;
`;

const Title = styled.h3`
  font-weight: 400;
`;

const CheckBox = styled.div``;

const EachCheckBox = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

const CheckCombie = styled.div``;

const CheckInput = styled.input``;

const CheckInputSpan = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const Text = styled.span`
  color: #858585;
  font-size: 14px;
`;

export default Emails;

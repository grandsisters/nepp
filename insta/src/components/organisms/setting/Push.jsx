import styled from "styled-components";
import { PushData } from "../../../data/PushData";

const Push = () => {
  return (
    <Wrapper>
      {PushData.map(({ title, labels, text }, i) => (
        <CheckingBox key={i}>
          <Title>{title}</Title>
          <EachChecking>
            {labels.map((e, i) => (
              <Label key={i}>
                <CheckInput type="checkbox" checked={e.checked} />
                {e.label}
              </Label>
            ))}
            <Text>{text}</Text>
          </EachChecking>
        </CheckingBox>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
`;

const CheckingBox = styled.div`
  border-bottom: 1px solid #dbdbdb;

  &:last-child {
    border: none;
  }
`;

const Title = styled.h2`
  font-weight: 300;
`;

const EachChecking = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
`;

const CheckInput = styled.input``;

const Text = styled.span`
  color: #a1a1a1;
  font-size: 14px;

  margin: 10px 0 20px 0;
`;

export default Push;

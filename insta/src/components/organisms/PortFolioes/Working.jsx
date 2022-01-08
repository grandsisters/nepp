import styled from "styled-components";
import { ImgWorking } from "../../../assets/images";

const Working = () => {
  return (
    <EachPortfolio>
      <MainBox>
        <BtnBox>
          <LinkBtn>작업중</LinkBtn>
        </BtnBox>

        <Wrapper>
          <ImgWorking />
        </Wrapper>
      </MainBox>
    </EachPortfolio>
  );
};

const EachPortfolio = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

const MainBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnBox = styled.div``;

const LinkBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: 100px;
  height: 30px;
  background: yellow;

  color: grey;
  font-weight: bold;
  font-size: 14px;

  &:active {
    background: #9c9c00;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  /* background: rgba(255, 255, 255, 0.3); ; */
`;

export default Working;

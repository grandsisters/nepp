import styled from "styled-components";
import { FooterNav, SettingLeftSide, SettingRightSide } from "../organisms";

const Setting = () => {
  return (
    <>
      <Background>
        <Wrapper>
          <SettingLeftSide />
          <SettingRightSide />
        </Wrapper>
      </Background>
      {/* <FooterNav /> */}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  padding-top: 90px;
  padding-bottom: 60px;
`;

const Wrapper = styled.div`
  width: 950px;
  height: auto;
  background: #fff;
  border: 1px solid #dbdbdb;

  display: flex;
`;

export default Setting;

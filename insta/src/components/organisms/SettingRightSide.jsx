import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SettingRightSide = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 100%;
`;

export default SettingRightSide;

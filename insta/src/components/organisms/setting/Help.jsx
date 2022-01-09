import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
  return (
    <Wrapper>
      <Title>Help</Title>

      <NavLink end to="HelpMenu" />

      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 60px;
`;

const Title = styled.h2`
  font-weight: 300;
`;

export default Help;

import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Request = () => {
  return (
    <Wrapper>
      <NavLink end to="" />

      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Request;

import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const EmailsSent = () => {
  return (
    <Wrapper>
      <Title>Instagram에서 보낸 이메일</Title>
      <Contents>
        <SubTitles>
          <StyledNavLink end to="">
            <SubTitle>보안</SubTitle>
          </StyledNavLink>
          <StyledNavLink to="ETC">
            <SubTitle>기타</SubTitle>
          </StyledNavLink>
        </SubTitles>
        <Outlet />
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 60px;
`;

const Title = styled.h2`
  font-weight: 300;
`;

const Contents = styled.div``;

const SubTitles = styled.div`
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-around;

  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  width: 50%;
  margin-bottom: -1px;

  &.active {
    border-bottom: 1px solid black;
  }

  &.active > p {
    color: black;
  }
`;

const SubTitle = styled.p`
  font-weight: bold;
  color: #dbdbdb;
`;

export default EmailsSent;

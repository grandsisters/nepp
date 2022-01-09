import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

const ManageAccess = () => {
  return (
    <>
      <Wrapper>
        <Title>앱 및 웹사이트</Title>
        <Box>
          <DetailTitles>
            <StyledNavLink end to="">
              <EachTitle>활성</EachTitle>
            </StyledNavLink>
            <StyledNavLink to="expired">
              <EachTitle>만료됨</EachTitle>
            </StyledNavLink>
            <StyledNavLink to="deleted">
              <EachTitle>삭제됨</EachTitle>
            </StyledNavLink>
          </DetailTitles>
          <TextBox>
            <Outlet />
          </TextBox>
        </Box>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Title = styled.h1`
  font-weight: 300;
  margin: 50px 0 0 50px;
`;

const Box = styled.div`
  margin: 60px;
`;

const DetailTitles = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #dbdbdb;
`;

const EachTitle = styled.p`
  font-weight: bold;
  color: #dbdbdb;

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  padding-top: 30px;
`;

const StyledNavLink = styled(NavLink)`
  width: 33.3%;
  margin-bottom: -1px;
  &.active {
    border-bottom: 1px solid black;
  }

  &.active > p {
    color: black;
  }
`;

export default ManageAccess;

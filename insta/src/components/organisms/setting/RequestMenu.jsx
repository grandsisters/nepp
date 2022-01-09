import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RequestMenu = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/setting/help">
        <Arrow src="https://i.instagram.com/static/images/bloks/icons/generated/arrow-left__outline__24-4x.png/43dc369f0a5c.png" />
        <Title>지원요청</Title>
      </StyledNavLink>
      <TextBox>
        <NavLink to="declaration">
          <Text>신고</Text>
        </NavLink>
        <NavLink to="violation">
          <Text>위반</Text>
        </NavLink>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
  background: #fafafa;
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const TextBox = styled.div`
  padding: 0 10px;
`;

const Text = styled.p`
  &:hover {
    cursor: pointer;
  }
`;

export default RequestMenu;

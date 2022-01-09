import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PAHelpData } from "../../../data/PAHelpData";

const PAHelp = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/setting/help">
        <Arrow src="https://i.instagram.com/static/images/bloks/icons/generated/arrow-left__outline__24-4x.png/43dc369f0a5c.png" />
        <Title>개인 정보 및 보안 도움말</Title>
      </StyledNavLink>
      {PAHelpData.map(({ title, content }, i) => (
        <ContentBox key={i}>
          <SubTitle>{title}</SubTitle>
          {content.map((e, i) => (
            <Content key={i}>{e.subtitle}</Content>
          ))}
        </ContentBox>
      ))}
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

const ContentBox = styled.div``;

const SubTitle = styled.h3``;

const Content = styled.p`
  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 20px;
  }
`;

export default PAHelp;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HelpMenu = () => {
  return (
    <Wrapper>
      <Contents>
        <Content>
          <ServiceCenter href="https://help.instagram.com/">고객 센터</ServiceCenter>
          <Arrow src="https://i.instagram.com/static/images/bloks/icons/generated/chevron-right__outline__16-4x.png/151f3ff18e18.png" />
        </Content>
        <Content>
          <NavLink to="PAHelp">개인정보 및 보안 도움말</NavLink>
          <Arrow src="https://i.instagram.com/static/images/bloks/icons/generated/chevron-right__outline__16-4x.png/151f3ff18e18.png" />
        </Content>
        <Content>
          <NavLink to="Request">지원요청</NavLink>
          <Arrow src="https://i.instagram.com/static/images/bloks/icons/generated/chevron-right__outline__16-4x.png/151f3ff18e18.png" />
        </Content>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Contents = styled.div`
  padding: 10px;
`;

const ServiceCenter = styled.a``;

const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 17px;

  & + & {
    margin-top: 20px;
  }
`;

const Arrow = styled.img`
  width: 16px;
  height: 16px;
`;

export default HelpMenu;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Declaration = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/setting/help/request">
        <Arrow src="https://i.instagram.com/static/images/bloks/icons/generated/arrow-left__outline__24-4x.png/43dc369f0a5c.png" />
        <Title>신고</Title>
      </StyledNavLink>
      <Contents>
        <SubTitle>신고하신 항목이 없습니다</SubTitle>
        <Text>커뮤니티 가이드라인을 확인하여 Instagram에서 허용되는 콘텐츠를 알아보고 허용되지 않는 콘텐츠를 신고하여 삭제하는 방법도 알아보세요.</Text>
        <Guide href="https://help.instagram.com/477434105621119">커뮤니티 가이드라인 보기</Guide>
      </Contents>
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
  margin: 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h2`
  font-weight: 500;
`;

const Text = styled.p`
  text-align: center;
  font-size: 15px;
  color: rgb(142, 142, 142);
`;

const Guide = styled.a`
  font-size: 12px;
`;

export default Declaration;

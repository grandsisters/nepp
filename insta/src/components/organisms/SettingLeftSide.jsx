import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ImgMeta } from "../../assets/images";

const SettingLeftSide = () => {
  const LinkList = [
    { path: "edit", name: "프로필 편집" },
    { path: "password", name: "비밀번호 변경" },
    { path: "manageAccess", name: "앱 및 웹사이트" },
    { path: "emails", name: "이메일 및 SMS" },
    { path: "push", name: "푸시 알림" },
    { path: "contract", name: "연락처 관리" },
    { path: "privacy", name: "개인정보 및 보안" },
    { path: "loginActivity", name: "로그인 활동" },
    { path: "emailsSent", name: "instagram에서 보낸 이메일" },
    { path: "help", name: "도움말" },
  ];

  return (
    <Wrapper>
      <LeftMain>
        {LinkList.map((e, i) => (
          <StyledNavLink to={e.path} key={i}>
            <LinkName>{e.name}</LinkName>
          </StyledNavLink>
        ))}
        <NavLinkBtn to="/login">
          <ProfessionalAccount>프로페셔널 계정으로 전환</ProfessionalAccount>
        </NavLinkBtn>
      </LeftMain>
      <LeftBottom>
        <ImgMeta />
        <AccountCenter href="https://accountscenter.instagram.com/profiles">
          <CenterTitle>계정 센터</CenterTitle>
          <CenterText>스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger 간에 연결된 환경에 대한 설정을 관리하세요.</CenterText>
        </AccountCenter>
      </LeftBottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 250px;
  height: auto;
  border-right: 1px solid #dbdbdb;
`;

const LeftMain = styled.div`
  height: auto;
`;

const StyledNavLink = styled(NavLink)`
  width: 90%;
  margin: 0;
  padding: 16px 16px 16px 30px;
  display: flex;

  &:hover {
    background: #dbdbdb;
    border-left: 2px solid #7a7a7a;
    padding-left: 28px;
  }

  &.active {
    border-left: 2px solid black;
    padding-left: 28px;
    font-weight: bold;
  }
`;

const LinkName = styled.p`
  margin: 0;
`;

const NavLinkBtn = styled(NavLink)`
  padding-left: 24px;
`;

const ProfessionalAccount = styled.button`
  color: #0095f6;
  border: none;
  background: #fff;
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px;
`;

const LeftBottom = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid #dbdbdb;
  margin-top: 10px;
  padding: 10px;
`;

const AccountCenter = styled.a``;

const CenterTitle = styled.p`
  color: #0095f6;
  font-size: 15px;
  font-weight: bold;
`;

const CenterText = styled.span`
  color: #838383;
  font-size: 12px;
`;

export default SettingLeftSide;

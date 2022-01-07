import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, Outlet, NavLink } from "react-router-dom";
import { ImgHome, ImgMessage, ImgNew, ImgExplore, ImgActivity, ImgProfileLogo, ImgBlackActivity, ImgSelectedNew, ImgBlackHome, ImgBlackMessage, ImgBlackExplore } from "../../assets/images";
import { ProfileDropdown, ModalTopNav, ActivityDropdown } from ".";
import ModalAccountChange from "../organisms/ModalAccountChange";
import LandingPageIcon from "../molecules/LandingPageIcon";

const TopNav = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showActivityDropdown, setShowActivityDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleActivityDropdown = () => {
    setShowActivityDropdown(!showActivityDropdown);
  };

  const [showChangeAccountModal, setShowshowChangeAccountModal] = useState(false);

  const handleshowChangeAccountModal = () => {
    setShowshowChangeAccountModal(!showChangeAccountModal);
  };

  useEffect(() => {
    document.body.style.overflow = showModal || showChangeAccountModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal, showChangeAccountModal]);

  return (
    <>
      {showModal && <ModalTopNav onClose={handleModal} />}
      <Header>
        <HeaderWrapper>
          <LogoLink to="/main">
            <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </LogoLink>
          <Nav>
            <SearchWrapper>
              <SearchInput placeholder="검색" />
            </SearchWrapper>
          </Nav>
          <NavMenu>
            <StyledLink to="/main">
              <InActiveIcon>
                <ImgHome />
              </InActiveIcon>
              <ActiveIcon>{showActivityDropdown || showModal ? <ImgHome /> : <ImgBlackHome />}</ActiveIcon>
            </StyledLink>

            <StyledLink to="/direct">
              <InActiveIcon>
                <ImgMessage />
              </InActiveIcon>
              <ActiveIcon>{showActivityDropdown || showModal ? <ImgMessage /> : <ImgBlackMessage />}</ActiveIcon>
            </StyledLink>

            <NewWrapper>{showModal ? <ImgSelectedNew /> : <ImgNew onClick={handleModal} />}</NewWrapper>

            <StyledLink to="/explore">
              <InActiveIcon>
                <ImgExplore />
              </InActiveIcon>
              <ActiveIcon>{showActivityDropdown || showModal ? <ImgExplore /> : <ImgBlackExplore />}</ActiveIcon>
            </StyledLink>

            <ActivityDropdownWrapper>
              {showActivityDropdown ? <ImgBlackActivity /> : <ImgActivity onClick={() => setShowActivityDropdown(true)} />}
              {showActivityDropdown && <ActivityDropdown onClose={handleActivityDropdown} />}
            </ActivityDropdownWrapper>

            <ProfileDropdownWrapper active={showProfileDropdown}>
              <ProfileImg src={ImgProfileLogo} onClick={() => setShowProfileDropdown(true)} />
              {showProfileDropdown && <ProfileDropdown onClose={handleProfileDropdown} onModal={handleshowChangeAccountModal} />}
              {showChangeAccountModal && <ModalAccountChange onClose={() => setShowshowChangeAccountModal(!showChangeAccountModal)} />}
            </ProfileDropdownWrapper>
          </NavMenu>
        </HeaderWrapper>
        <StyledLandingPageIcon />
      </Header>
      <Outlet />
    </>
  );
};

const StyledLandingPageIcon = styled(LandingPageIcon)``;

const Header = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  max-width: 975px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)``;

const LogoImage = styled.img`
  width: 104px;
  cursor: pointer;
  vertical-align: bottom;

  &:active {
  }
`;

const SearchWrapper = styled.div`
  width: 268px;
  height: 36px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 242px;
  height: 18px;
  border: none;
`;

const Nav = styled.nav`
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  width: 278px;
  height: 24px;
  display: flex;
  justify-content: space-evenly;
  position: relative;

  & > *:hover {
    cursor: pointer;
  }
`;

const InActiveIcon = styled.span``;

const ActiveIcon = styled.span``;

const StyledLink = styled(NavLink)`
  ${ActiveIcon} {
    display: none;
  }

  &.active {
    ${ActiveIcon} {
      display: block;
    }
    ${InActiveIcon} {
      display: none;
    }
  }
`;

const NewWrapper = styled.div``;

const ActivityDropdownWrapper = styled.div``;

const ProfileDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border-radius: 50%;

  ${(props) =>
    props.active &&
    css`
      border: 1px solid black;
    `}
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default TopNav;

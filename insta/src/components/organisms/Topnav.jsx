import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { ImgHome, ImgMessage, ImgNew, ImgFind, ImgActivity, ImgProfileLogo, ImgBlackActivity, ImgSelectedNew } from "../../assets/images";
import { ProfileDropdown, ModalTopNav, ActivityDropdown } from ".";

const TopNav = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showActivityDropdown, setShowActivityDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const ProfileDropdownEl = useRef(null);
  const ActivityDropdownEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ProfileDropdownEl.current && !ProfileDropdownEl.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (ActivityDropdownEl.current && !ActivityDropdownEl.current.contains(e.target)) {
        setShowActivityDropdown(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, [showActivityDropdown]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <ModalTopNav onClose={handleModal} />}
      <Header>
        <HeaderWrapper>
          <Link to="main">
            <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </Link>
          <Nav>
            <SearchWrapper>
              <SearchInput placeholder="검색" />
            </SearchWrapper>
          </Nav>
          <NavMenu>
            <ImgHome />
            <ImgMessage />

            <NewWrapper>{showModal ? <ImgSelectedNew /> : <ImgNew onClick={handleModal} />}</NewWrapper>

            <ImgFind />
            <ActivityDropdownWrapper ref={ActivityDropdownEl}>
              {showActivityDropdown ? <ImgBlackActivity onClick={() => setShowActivityDropdown(false)} /> : <ImgActivity onClick={() => setShowActivityDropdown(true)} />}
              {showActivityDropdown && <ActivityDropdown />}
            </ActivityDropdownWrapper>

            <ProfileDropdownWrapper active={showProfileDropdown}>
              <ProfileImg src={ImgProfileLogo} onClick={() => setShowProfileDropdown(!showProfileDropdown)} ref={ProfileDropdownEl} />
              {showProfileDropdown && <ProfileDropdown />}
            </ProfileDropdownWrapper>
          </NavMenu>
        </HeaderWrapper>
      </Header>
      <Outlet />
    </>
  );
};

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

const LogoImage = styled.img`
  width: 104px;
  cursor: pointer;
  vertical-align: bottom;
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

const Nav = styled.nav``;

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

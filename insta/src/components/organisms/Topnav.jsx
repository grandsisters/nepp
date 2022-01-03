import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgHome, ImgMessage, ImgNew, ImgFind, ImgActivity, ImgProfileLogo, ImgBlackActivity } from "../../assets/images";
import { ProfileDropdown, ModalAddPost, ActivityDropdown } from ".";

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
        console.log(e);
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
      {showModal && <ModalAddPost onClose={handleModal} />}
      <Header>
        <HeaderWrapper>
          <Link to="/">
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
            <ImgNew onClick={handleModal} />
            <ImgFind />
            <ActivityDropdownWrapper ref={ActivityDropdownEl}>
              {showActivityDropdown ? (
                <ImgBlackActivity onClick={() => setShowActivityDropdown(!showActivityDropdown)} />
              ) : (
                <ImgActivity onClick={() => setShowActivityDropdown(!showActivityDropdown)} />
              )}
              {showActivityDropdown && <ActivityDropdown />}
            </ActivityDropdownWrapper>

            <ProfileDropdownWrapper ref={ProfileDropdownEl}>
              <ProfileImg src={ImgProfileLogo} onClick={() => setShowProfileDropdown(!showProfileDropdown)} />
              {showProfileDropdown && <ProfileDropdown />}
            </ProfileDropdownWrapper>
          </NavMenu>
        </HeaderWrapper>
      </Header>
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

const ActivityDropdownWrapper = styled.div``;

const ProfileDropdownWrapper = styled.div``;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 15px;
`;

export default TopNav;

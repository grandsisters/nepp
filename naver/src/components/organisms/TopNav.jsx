import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const linkList = [
  { link: "/", name: "메인" },
  { link: "/Movie", name: "영화" },
  { link: "/Book", name: "책" },
];

const TopNav = () => {
  let { pathname } = useLocation();
  if (pathname === "/") return <></>;

  return (
    <Container>
      <Nav>
        <LinkList>
          {linkList.map((e) => (
            <Link to={e.link}>
              <LinkItem active={pathname === e.link}>{e.name}</LinkItem>
            </Link>
          ))}
        </LinkList>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav``;

const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

const LinkItem = styled.li`
  margin: 0 10px;
  ${(props) =>
    props.active &&
    css`
      background: black;
      color: white;
      padding: 5px;
    `}
`;

export default TopNav;

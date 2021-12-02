import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { css } from "styled-components";

const menuList = [
  { name: "youtube 프리미엄", link: "https://www.youtube.com/" },
  { name: "youtube 프리미엄", link: "https://www.youtube.com/" },
  { name: "youtube 프리미엄", link: "https://www.youtube.com/" },
  { name: "youtube 프리미엄", link: "https://www.youtube.com/" },
];

const Dropdown = () => {
  const [active, setActive] = useState(false);
  const dropdownEl = useRef(null);

  const handleClick = useCallback(() => {
    // const newActive = !active;
    // setActive(newActive);
    setActive(!active);
  }, [active]);

  useEffect(
    (e) => {
      const handleClick = () => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.current.target)) {
          setActive(false);
        }
      };
      document.body.addEventListener("click", handleClick);
      return () => {
        document.body.removeEventListener("click", handleClick);
      };
    },
    [dropdownEl]
  );

  return (
    <Wrapper ref={dropdownEl}>
      <Button onClick={handleClick}>인사 버튼</Button>
      {active && (
        <Menu>
          {menuList.map((e) => (
            <a href={e.link} target="_blank" rel="noreferrer" key={e.name}>
              <Item>e.name</Item>
            </a>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background: aqua;
  color: black;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  border: 1px solid black;
  width: 100px;
  padding-left: 0;
  text-align: center;

  /* display: none; */

  /* ${({ active }) =>
    active &&
    css`
      display: block;
    `} */
`;

const Item = styled.li`
  cursor: pointer;

  &:hover {
    background: black;
  }

  & + & {
    border-top: 1px solid black;
  }
`;

export default Dropdown;

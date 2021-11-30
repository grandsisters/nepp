import React, { useState } from "react";
import styled, { css } from "styled-components";

const Dropdown = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const newActive = !active;
    setActive(newActive);
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>인사 버튼</Button>
      {active && (
        <Menu>
          <Item>하이</Item>
          <Item>안녕</Item>
          <Item>구텐탁</Item>
          <Item>곤니찌와</Item>
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

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Dropdown = () => {
  // 1. useState로 변수 선언
  // 2. button 누르면 변수값 변경
  // 3. 변수에 따라서 Menu 컴포넌트 조절
  const [active, setActive] = useState(false);
  const dropdownEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={dropdownEl}>
      <Button onClick={() => setActive(!active)}>Dropdown</Button>
      {/* {active && (
        <Menu>
          <Item>Item1</Item>
          <Item>Item2</Item>
          <Item>Item3</Item>
          <Item>Item4</Item>
        </Menu>
      )} */}
      <Menu active={active}>
        <Item>Item1</Item>
        <Item>Item2</Item>
        <Item>Item3</Item>
        <Item>Item4</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background: #198754;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Menu = styled.ul`
  position: absolute;
  background: #fff;
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  display: ${({ active }) => !active && "none"};
`;
const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
`;

export default Dropdown;

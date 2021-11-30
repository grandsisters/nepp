import React, { useState } from "react";
import styled, { css } from "styled-components";

const Accordian2 = () => {
  // const [Lists, setLists] = useState([
  //   { id: 1, title: "This is Accordian", content: "Hi Hello 안녕", active: false },
  //   { id: 2, title: "This is Accordian", content: "Hi Hello 안녕", active: false },
  //   { id: 3, title: "This is Accordian", content: "Hi Hello 안녕", active: false },
  //   { id: 4, title: "This is Accordian", content: "Hi Hello 안녕", active: false },
  // ]);

  const Lists = [
    { id: 0, title: "This is Accordian", content: "Hi Hello 안녕" },
    { id: 1, title: "This is Accordian", content: "Hi Hello 안녕" },
    { id: 2, title: "This is Accordian", content: "Hi Hello 안녕" },
    { id: 3, title: "This is Accordian", content: "Hi Hello 안녕" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // const handleClick = (id) => {
  //   const newList = Lists.map((x) => ({
  //     ...x,
  //     active: x.id === id ? !x.active : false,
  //   }));
  //   setLists(newList);
  // };

  const handleClick = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  return (
    <ListBox>
      {Lists.map((e, i) => (
        <List active={activeIndex === i}>
          <Header onClick={() => handleClick(e.id)}>{e.title}</Header>
          <Body>{e.content}</Body>
        </List>
      ))}
    </ListBox>
  );
};

const ListBox = styled.ul`
  list-style: none;
  width: 300px;
`;

const List = styled.li`
  border: 1px solid black;
  cursor: pointer;

  & + & {
    border-top: none;
  }

  ${({ active }) =>
    active &&
    css`
      ${Body} {
        display: block;
      }
    `}
`;

const Header = styled.div`
  /* border-bottom: 1px solid black; */
  padding: 20px;
`;

const Body = styled.div`
  display: none;
  height: 100px;
  border-top: 1px solid black;
  padding: 20px;
`;

export default Accordian2;

import React from "react";
import styled, { css } from "styled-components";

const Accordian = ({ data, onChange }) => {
  const handleActive = (id) => {
    const newData = data.map((item) => ({
      ...item,
      active: item.id === id ? !item.active : false,
    }));
    onChange(newData);
  };

  return (
    <List>
      {data.map((c) => (
        <Item active={c.active}>
          <Header onClick={() => handleActive(c.id)}>{c.title}</Header>
          <Body>{c.content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  border: 1px solid #efefef;
  border-radius: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Header = styled.div`
  padding: 9px;
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  /* width: 300px; */
  /* height: 100px; */
  padding: 5px;
  display: none;
  border: 1px solid black;
`;
const Item = styled.li`
  cursor: pointer;

  & + & {
    border-top: 1px solid #efefef;
  }

  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background-color: #e7f1ff;
      }
      ${Body} {
        display: block;
      }
    `}
`;

export default Accordian;

import React from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data, onChange }) => {
  const handleClick = (id) => {
    // const newData = data.map((item) => {
    //   item.active = item.id === id ? !item.active : false;
    //   return item;
    // });
    const newData = data.map((item) => ({
      ...item,
      active: item.id === id ? !item.active : false,
    }));

    onChange(newData);
  };
  return (
    <List>
      {data.map(({ id, active, title, content }) => (
        <Item active={active}>
          <Header onClick={() => handleClick(id)}>{title}</Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  border: 1px solid #efefef;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Header = styled.div`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  padding: 15px;
  border-top: 1px solid #efefef;
  display: none;
`;
const Item = styled.li`
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

export default Accordion;

import React from "react";
import styled from "styled-components";

const DropdownProfileMenu = ({ data }) => {
  return (
    <Menu>
      {data.map(({ image, name }) => (
        <Item key={name}>
          <ImgItem src={image} />
          <ItemName>{name}</ItemName>
        </Item>
      ))}
    </Menu>
  );
};

const Menu = styled.ul`
  list-style: none;
  padding: 8px 0;
  border-top: 1px solid #ddd;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 36px 0 16px;
  height: 40px;
  cursor: pointer;
  :hover {
    background: #eee;
  }
`;
const ImgItem = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
const ItemName = styled.div``;

export default DropdownProfileMenu;

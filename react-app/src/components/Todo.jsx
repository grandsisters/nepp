import React from "react";
import styled, { css } from "styled-components";

const TodoComponent = () => {
  return (
    <>
      <Container>
        <Title>일정 관리</Title>
        <InputWrapper>
          <Input />
          <BtnAdd>등록</BtnAdd>
        </InputWrapper>
        <TodoList>
          <TodoItem>
            <label>
              <input type="checkbox" />
              <TodoContent>할일</TodoContent>
            </label>
            <BtnDelete>삭제</BtnDelete>
          </TodoItem>
          <TodoItem>
            <label>
              <input type="checkbox" />
              <TodoContent>할일</TodoContent>
            </label>
            <BtnDelete>삭제</BtnDelete>
          </TodoItem>
        </TodoList>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  overflow: auto;
`;
const Title = styled.div`
  background: #00ffffb0;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  padding-top: 20px;
`;
const InputWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 30px;
  display: flex;
  position: relative;
  background: black;
`;
const Input = styled.input`
  width: 430px;
  background: black;
  border: black;

  &:focus {
    outline: none;
  }
`;
const BtnAdd = styled.button`
  position: absolute;
  right: 5px;
  top: 3px;
  /* border: black; */

  &:hover {
    cursor: pointer;
  }
`;

const TodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
const TodoItem = styled.li`
  border-bottom: 1px solid black;
  width: 100%;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
`;
const TodoContent = styled.span`
  font-weight: bold;
`;
const BtnDelete = styled.button`
  position: absolute;
  right: 5px;
  top: 3px;
`;

export default TodoComponent;

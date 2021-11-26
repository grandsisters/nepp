import React, { useState } from "react";
import styled, { css } from "styled-components";

const TodoComponent2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [nextId, setNextId] = useState(1);
  const [todoArray, setTodoArray] = useState([]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const addTodoArray = () => {
    setNextId(nextId + 1);
    setTodoArray([...todoArray, { id: nextId, text: inputValue, isDone: false }]);
    console.log(todoArray);
  };
  const deleteArray = (id) => {
    const newArray = todoArray.filter((e) => e.id !== id);
    setTodoArray(newArray);
  };

  const toggleCheck = (e, id) => {
    console.log(e.target.checked);
    const isDone = e.target.checked;
    const newArray = todoArray.map((todo) => {
      return todo.id === id ? { ...todo, isDone: isDone } : todo;
    });
    setTodoArray(newArray);
  };

  return (
    <Container>
      <Title>일정관리</Title>
      <InputWrapper>
        <Input onChange={inputChange} placeholder="할 일을 입력하세요." />
        <BtnAdd onClick={addTodoArray}>등록</BtnAdd>
      </InputWrapper>
      <TodoList>
        {todoArray.map((todoArray) => (
          <TodoItem key={todoArray.id} isDone={todoArray.isDone}>
            <label>
              <input type="checkbox" onClick={(e) => toggleCheck(e, todoArray.id)} />
              <TodoContent>{todoArray.text}</TodoContent>
            </label>
            <BtnDelete onClick={() => deleteArray(todoArray.id)}>삭제</BtnDelete>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
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

  &:hover {
    cursor: pointer;
  }
`;
const TodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
const TodoContent = styled.span`
  font-weight: bold;
`;
const TodoItem = styled.li`
  border-bottom: 1px solid black;
  width: 100%;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;

  ${TodoContent} {
    ${(props) =>
      props.isDone &&
      css`
        text-decoration: line-through;
      `};
  }

  /* ${({ isDone }) =>
    isDone &&
    css`
      background: black;
      color: white;
      ${TodoContent} {
        text-decoration: line-through;
      }
    `} */
`;

const BtnDelete = styled.button`
  position: absolute;
  right: 5px;
  top: 3px;
`;

export default TodoComponent2;

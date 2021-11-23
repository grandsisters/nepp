import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";

const TodoComponent = () => {
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, text: "할일", isDone: false },
    { id: 2, text: "할일", isDone: false },
  ]);
  const [nextId, setNextId] = useState(3);

  const changedValue = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };
  const addList = () => {
    setNextId(nextId + 1);
    setTodoList([...todoList, { id: nextId, text: content, isDone: false }]);
    console.log(todoList);
  };
  const deleteList = (id) => {
    setTodoList(todoList.filter((e) => e.id !== id));
  };
  const handleToggle = (e, id) => {
    const isDone = e.target.checked;
    const newArray = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isDone: isDone } : todo;
    });
    setTodoList(newArray);
  };

  return (
    <>
      <Container>
        <Title>일정 관리</Title>
        <InputWrapper>
          <Input onChange={changedValue} placeholder="할 일을 입력하세요." />
          <BtnAdd onClick={addList}>등록</BtnAdd>
        </InputWrapper>
        <TodoList>
          {todoList.map(({ id, text, isDone }) => (
            <TodoItem key={id} isDone={isDone}>
              <label>
                <input type="checkbox" onChange={(e) => handleToggle(e, id)} />
                <TodoContent>{text}</TodoContent>
              </label>
              <BtnDelete onClick={() => deleteList(id)}>삭제</BtnDelete>
            </TodoItem>
          ))}
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
    text-decoration: ${(props) => props.isDone && "line-through"};
  }

  ${({ isDone }) =>
    isDone &&
    css`
      background: black;
      color: white;
      ${TodoContent} {
        text-decoration: line-through;
      }
    `}
`;
const BtnDelete = styled.button`
  position: absolute;
  right: 5px;
  top: 3px;
`;

export default TodoComponent;

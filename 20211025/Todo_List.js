const init = () => {
  // const strTodoList = localStorage.todoList;
  // const todoList = JSON.parse(strTodoList);
  if (!localStorage.todoList) return;

  const todoList = JSON.parse(localStorage.todoList);

  for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    addTodo(value);
  }
};

const addTodo = (value) => {
  const todo = `
  <li class="each-list">
  <label class="check-text" for="delete-btn">
  <input type="checkbox" class="input-check" />
  <span class="list-text">${value}</span> </label>
  <button class="edit-btn">수정</button
  ><button class="delete-btn">삭제</button>
  </li>
  `;

  $(".lists").append(todo);
};

const saveTodoList = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

init();

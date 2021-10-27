const init = () => {
  if (!localStorage.todoList) return;

  const todoList = JSON.parse(localStorage.todoList);

  for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    addTodo(value);
  }
};

const addTodo = (value) => {
  const todo = `
  <li class="todo-item">
    <label>
      <input type="checkbox" class="input-check"/>
      <span class="todo-content">${value}</span>
    </label>
    <button class="btn-edit">수정</button>
    <button class="btn-delete">삭제</button>
  </li>
  `;

  $(".todo-list").append(todo);
};

const saveTodoList = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

init();

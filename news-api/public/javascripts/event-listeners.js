// const { urlencoded } = require("express");

$(".form-add").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();
  if (value === "") return;

  $.ajax({
    url: "/todo",
    method: "POST",
    data: { isDone: 0, content: value },
    success: () => {
      const todo = { isDone: false, content: value };
      addTodo(todo);
    },
  });

  // saveTodoList()로 대체됨
  // const strTodoList = JSON.stringify(todoList);
  // localStorage.setItem("todoList", strTodoList);

  // 위와 같다
  // const todoList = JSON.parse(localStorage.getItem("todoList"));
  // todoList.push(value);
  // localStorage.setItem("todoList", JSON.stringify(todoList));

  // 실행이 안됨
  // const rawTodoList = localStorage.todoList || "[]";
  // const todoList = JSON.parse(rawTodoList);
  // todoList.push(value);
  // localStorage.setItem("todoList", JSON.stringify(todoList));

  // console.log(localStorage.todoList);
  // localStorage.setItem("todo", value);
});

// 이렇게 하면 새로추가 된 li요소들은 삭제가 안된다.
// $(".delete-btn").on("click", (e) => {
//   const x = e.currentTarget.closest("li");
//   x.remove();
// });

$(document).on("click", ".delete-btn", (e) => {
  const $todoItem = $(e.currentTarget).closest("li");
  const id = $todoItem.data("id");
  console.log(id);

  $.ajax({
    url: `/todo/${id}`,
    method: "DELETE",
    success: (result) => {
      console.log(result.success);
      $todoItem.remove();
    },
  });

  $todoItem.remove();

  // const todoList = JSON.parse(localStorage.todoList);
  // todoList.splice(index, 1);
  // saveTodoList(todoList);

  // saveTodoList()로 대체됨
  // localStorage.setItem("todoList", JSON.stringify(todoList));
});

$(document).on("change", ".input-check", (e) => {
  const isChecked = e.currentTarget.checked;
  const nearItem = $(e.currentTarget).closest(".each-list");

  if (isChecked) {
    $(nearItem).addClass("active");
  } else {
    $(nearItem).removeClass("active");
  }

  const index = nearItem.index();
  const todoList = JSON.parse(localStorage.todoList);
  todoList[index].isDone = isChecked;
  saveTodoList(todoList);
});

$(".deleteAll-btn").click(() => {
  $.ajax({
    url: `/todo/`,
    method: "DELETE",
    success: (result) => {
      console.log(result.success);
      $("ul").empty();
    },
  });
});

$(document).on("click", ".edit-btn", (e) => {
  const $todoContent = $(e.currentTarget).parent().find(".list-text");
  const preValue = $todoContent.text();
  const content = prompt("수정할 내용을 입력하세요", preValue);

  if (!content) return;
  // 수정할 내용이 있는 경우에만 변경하기
  $todoContent.text(content);

  const $todoItem = $(e.currentTarget).closest("li");
  const index = $todoItem.index();
  const todoList = JSON.parse(localStorage.todoList);
  todoList[index].content = content;
  saveTodoList(todoList);
  // localStorage.setItem("todoList", JSON.stringify(todoList));
});

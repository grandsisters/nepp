// 추가
$(".form-todo").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();

  // input에 아무것도 안적혀있으면 추가 안하기
  if (value === "") return;

  addTodo(value);

  $("#input-todo").val("");
  $("#input-todo").focus();

  const rawTodoList = localStorage.getItem("todoList") || "[]";
  const todoList = JSON.parse(rawTodoList);
  todoList.push(value);
  saveTodoList(todoList);
});

// 삭제
$(document).on("click", ".btn-delete", (e) => {
  const $todoItem = $(e.currentTarget).closest(".todo-item");
  const index = $todoItem.index();

  $todoItem.remove();

  const todoList = JSON.parse(localStorage.todoList);
  todoList.splice(index, 1);
  saveTodoList(todoList);
});

// 할일 체크
$(document).on("change", ".input-check", (e) => {
  const isChecked = e.currentTarget.checked;

  const $todoItem = $(e.currentTarget).closest(".todo-item");
  if (isChecked) {
    // .todo-item에 done 클래스를 붙인다
    $todoItem.addClass("done");
  } else {
    // .todo-item에 done 클래스를 제거한다
    $todoItem.removeClass("done");
  }
});

// 전체삭제
$(".btn-deleteAll").click(() => {
  $(".todo-list").empty();
  saveTodoList([]);
});

// 내용 수정
$(document).on("click", ".btn-edit", (e) => {
  const $todoContent = $(e.currentTarget).parent().find(".todo-content");
  const prev = $todoContent.text();
  const content = prompt("수정할 내용을 입력하세요", prev);

  if (content) {
    $todoContent.text(content);

    const $todoItem = $(e.currentTarget).closest(".todo-item");
    const index = $todoItem.index();
    const todoList = JSON.parse(localStorage.todoList);
    todoList[index] = content;
    saveTodoList(todoList);
  }
});

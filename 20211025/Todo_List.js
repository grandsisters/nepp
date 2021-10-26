const init = () => {
  const value = localStorage.todoList;
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

init();

$(".form-add").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();
  if (value === "") return;

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
  $("#input-todo").val("");
  $("#input-todo").focus();

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
  const x = e.currentTarget.closest("li");
  x.remove();
});

$(document).on("change", ".input-check", (e) => {
  const isChecked = e.currentTarget.checked;
  const nearItem = e.currentTarget.closest("li");
  if (isChecked) {
    $(nearItem).addClass("active");
  } else {
    $(nearItem).removeClass("active");
  }
});

$(".deleteAll-btn").click(() => {
  $("ul").empty();
});

$(document).on("click", ".edit-btn", (e) => {
  const $todoContent = $(e.currentTarget).parent().find(".list-text");
  const preValue = $todoContent.text();
  const content = prompt("수정할 내용을 입력하세요", preValue);

  // 수정할 내용이 있는 경우에만 변경하기
  // 사실 기본값이 있기 때문에 그렇게 쓸모는 없다고 봄
  if (content) $todoContent.text(content);
});

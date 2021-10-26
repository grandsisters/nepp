const init = () => {
  const value = localStorage.todoList;
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

init();

// 추가
$(".form-todo").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();

  // input에 아무것도 안적혀있으면 추가 안하기
  if (value === "") return;

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
  //   $(".todo-list").prepend(value);

  $("#input-todo").val("");
  $("#input-todo").focus();

  const rawTodoList = localStorage.todoList || "[]";
  const todoList = JSON.parse(rawTodoList);
  todoList.push(value);

  localStorage.setItem("todoList", JSON.stringify(todoList));
  console.log(localStorage.todoList);
});

// $(".btn-delete").on("click", (e) => {
//   // 1. 클릭된 버튼의
//   // 2. 부모중에서 가장 가까운 .todo-item 을
//   //   closest(".todo-item");
//   // 3. remove()

//   // $(".btn-delete");
//   // 메소드 체이닝
//   const $todoItem = $(e.currentTarget).closest(".todo-item");
//   $todoItem.remove();

//   // $(e.currentTarget).closest(".todo-item").remove();
// });

// 삭제
$(document).on("click", ".btn-delete", (e) => {
  const $todoItem = $(e.currentTarget).closest(".todo-item");
  $todoItem.remove();
});

// 할일 체크
$(document).on("change", ".input-check", (e) => {
  // console.log($(e.target).prop("checked"));
  const isChecked = e.currentTarget.checked;
  // 1. 할일 string 엘리먼트의 부모요소의 클래스 여부에 따라서
  //   할일 엘리먼트의
  //   text-decoration: line-through로 바꿔주는 css코드
  // 2. isChecked 여부에 따라서 할일 엘리먼트 부모요소에
  //   클래스를 뗏다 붙였다.
  //  isChecked가 true면 부모에 클래스 붙이고
  //  false면  부모에 클래스 제거하고

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
});

// 내용 수정
$(document).on("click", ".btn-edit", (e) => {
  const $todoContent = $(e.currentTarget).parent().find(".todo-content");
  const prev = $todoContent.text();
  const content = prompt("수정할 내용을 입력하세요", prev);

  if (content) $todoContent.text(content);
});

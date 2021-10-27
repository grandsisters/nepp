$(".form-todo").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();

  // input에 아무것도 안적혀있으면 추가 안하기
  if (value === "") return;

  const todo = `
<li class="todo-item">
  <label>
    <input type="checkbox" />
    <span>${value}</span>
  </label>
  <button class="btn-delete">삭제</button>
</li>
`;

  $(".todo-list").append(todo);
  //   $(".todo-list").prepend(value);

  $("#input-todo").val("");
  $("#input-todo").focus();
});

$(".btn-delete").on("click", () => {
  // 클릭된 버튼의 부모중에서 가장 가까운 .todo-item 을 remove()
  //   closest(".todo-item");
  //   remove();
});

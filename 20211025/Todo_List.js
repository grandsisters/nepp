$(".form-add").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();
  if (value === "") return;

  const todo = `
  <li class="each-list">
  <label class="check-text" for="delete-btn">
    <input type="checkbox" name="" id="" />
    <span class="list-text"
      >${value}</span
    > </label
  ><button class="delete-btn">삭제</button>
</li>`;

  $(".lists").append(todo);
  $("#input-todo").val("");
  $("#input-todo").focus();
});

$(".delete-btn").on("click", (e) => {
  const x = e.currentTarget.closest("li");
  x.remove();
});

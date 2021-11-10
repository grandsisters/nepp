$(".form-add").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();
  if (value === "") return;

  $.ajax({
    url: "/todo/",
    method: "POST",
    data: { isDone: 0, content: value },
    success: (result) => {
      // console.log(result);
      const id = result.id;
      const todo = { isDone: false, content: value, id: id };
      addTodo(todo);
    },
  });
});

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
});

$(document).on("change", ".input-check", (e) => {
  const isChecked = e.currentTarget.checked;
  const nearItem = $(e.currentTarget).closest(".each-list");
  const id = nearItem.data("id");

  const isDone = isChecked ? 1 : 0;

  console.log("isDone", isChecked);
  console.log("id", id);

  $.ajax({
    url: `/todo/${id}/isDone`,
    method: "PATCH",
    data: { isDone },
    success: (result) => {
      console.log(result.success);
      if (isChecked) {
        $(nearItem).addClass("active");
      } else {
        $(nearItem).removeClass("active");
      }
    },
  });
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

  const $todoItem = $(e.currentTarget).closest("li");
  const id = $todoItem.data("id");

  $.ajax({
    url: `/todo/${id}/content`,
    method: "PATCH",
    data: { content },
    success: (result) => {
      console.log(result.success);
      $todoContent.text(content);
    },
  });
});

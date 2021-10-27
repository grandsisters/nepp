// 추가 기능
$(".form-add").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-todo").val();

  if (value === "") return;

  todo = `
  <li class="each-list">
  <label class="check-text"> 
  <input type="checkbox" class="input-check" /> 
  <span class="list-text">${value}</span> 
  </label>
  <button class="edit-btn">수정</button>
  <button class="delete-btn">삭제</button>
  </li>
  `;

  $(".lists").append(todo);
  $("#input-todo").val(" ");
  $("#input-todo").focus();
});

// 체크 기능
$(document).on("change", ".input-check", (e) => {
  const isChecked = e.currentTarget.checked;
  const nearItem = e.currentTarget.closest(".each-list");
  if (isChecked) {
    $(nearItem).addClass("active");
  } else {
    $(nearItem).removeClass("active");
  }
});

// 삭제 기능
$(document).on("click", ".delete-btn", (e) => {
  const byeList = e.currentTarget.closest(".each-list");
  byeList.remove();
});

// 전체 삭제 기능
$(".deleteAll-btn").on("click", () => {
  $(".lists").empty();
});

// 내용 수정
$(document).on("click", ".edit-btn", (e) => {
  // 값에 접근하기 위해 부모요소로 올라가서 값을 찾게끔 한다.
  const $todoContent = $(e.currentTarget).parent().find(".list-text");
  // 기존 값
  const preValue = $todoContent.text();
  const content = prompt("수정할 값을 입력해 주세요.", preValue);

  if (content) $todoContent.text(content);
});

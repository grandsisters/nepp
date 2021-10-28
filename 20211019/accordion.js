// banilla JS로만 구현하기
// 'block'이 안됨
// const $plusBtn = document.getElementsByClassName("more");
// const $contents = document.getElementsByClassName("contents");

// for (let i = 0; i < $plusBtn.length; i++) {
//   if (($contents[i].style.display = "none")) {
//     $plusBtn[i].addEventListener("click", () => {
//       $contents[i].style.display = "block";
//     });
//   } else if (($contents[i].style.display = "block")) {
//     $plusBtn[i].addEventListener("click", () => {
//       $contents[i].style.display = "none";
//     });
//   } else {
//     break;
//   }
// }

// jquery 사용하기
// $(".name-tag").click(() => {
//   alert("hi");
// });

// $(".name-tag").click((e) => {
//   $(e.target).parent().toggleClass("active");
// });

$(".items").click((e) => {
  const isTitle = $(e.target).hasClass("name-tag");
  console.log(e.target);
  if (isTitle) {
    const isActive = $(e.currentTarget).hasClass("active");
    $(".items").removeClass("active");
    if (!isActive) {
      $(e.currentTarget).addClass("active");
    }
  }
});

// $(".items").click(function (e) {
//   const isTitle = $(e.target).hasClass("name-tag");
//   if (isTitle) {
//     $(this).toggleClass("active");
//   }
// });

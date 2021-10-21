// 첫번째 만든것
// $(".t-btn").click(() => {
//   $(".toasted").addClass("active");
//   setTimeout(() => {
//     $(".toasted").removeClass("active");
//   }, 3000);
// });

// fadeIn 과 fadeOut을 사용
// $(".t-btn").click(() => {
//   $(".toasted").fadeIn(() => {
//     $(".toasted").fadeOut(3000);
//   });
// });

// $().show(); - 보이게(엘리먼트의 display를 기본속성으로)
// $().hide(); - 안보이게(엘리먼트의 display를 none으로)
// $().toggle(); - 엘리먼트를 뗏다 붙였다함

// $(".t-btn").click(() => {
//   $(".toasted").show();
//   setTimeout(() => {
//     $(".toasted").hide();
//   }, 3000);
// });

$(".t-btn1").click(() => {
  $(".toasted1").addClass("active");
  setTimeout(() => {
    $(".toasted1").removeClass("active");
  }, 3000);
});

$(".t-btn2").click(() => {
  $(".toasted2").addClass("active");
  setTimeout(() => {
    $(".toasted2").removeClass("active");
  }, 3000);
});

// $(".t-btn").click((e) => {
//   const haveIt = $(e.target).hasClass("toasted");
//   if (haveIt) {
//     const isRun = $(e.currentTarget).hasClass("active");
//     $(".toasted").removeClass("active");
//     if (!isRun) {
//       $(".toasted").addClass("active");
//     }
//   }
// });

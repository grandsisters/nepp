// $(".btn").click(() => {
//   $(".lists").toggle();
// });

$(".btn").click((e) => {
  $(e.currentTarget).toggleClass("more");
});

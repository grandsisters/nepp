$(".fire").click(() => {
  $(".box").show();
  $(".backdrop").show();
});

$(".btn-no, .press-x, .backdrop, .thanks").click(() => {
  $(".box").hide();
  $(".box2").hide();
  $(".backdrop").hide();
});

$(".btn-yes").click(() => {
  $(".box").hide();
  $(".box2").show();
});

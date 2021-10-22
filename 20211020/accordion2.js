// $(".items").click((e) => {
//   const haveIt = $(e.target).hasClass("name-tag");
//   const isRun = $(e.currentTarget).hasClass("more");
//   if (haveIt) {
//     $(".items").removeClass("more");
//     if (!isRun) {
//       $(e.currentTarget).addClass("more");
//     }
//   }
// });

$(".items").click((e) => {
  const isHead = $(e.target).hasClass("name-tag");
  const isImg = $(e.target).hasClass("tag-img");
  if (!isHead && !isImg) return;

  if (isHead || isImg) {
    const isActive = $(e.currentTarget).hasClass("more");
    $(".items").removeClass("more");
    if (!isActive) {
      $(e.currentTarget).addClass("more");
      $(".contents").slideUp();
      $(".items.more .contents").slideDown();
    }
  }
});

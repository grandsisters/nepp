$(".items").click((e) => {
  const haveIt = $(e.target).hasClass("name-tag");
  const isRun = $(e.currentTarget).hasClass("more");
  if (haveIt) {
    $(".items").removeClass("more");
    if (!isRun) {
      $(e.currentTarget).addClass("more");
    }
  }
});

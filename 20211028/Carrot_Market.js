$(".down-chat").on("click", (e) => {
  const isIt = $(e.target).hasClass("download");
  // console.log(e.target);
  // console.log(isIt);
  if (isIt) {
    const haveIt = $(".down-chat").hasClass("active");
    $(".down-chat").removeClass("active");
    if (!haveIt) {
      $(".down-chat").addClass("active");
    }
  }
});

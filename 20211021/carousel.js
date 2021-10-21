// let i = 1;
// $(`.carousel-item:nth-child(${i})`).addClass("active");

// $(".btn-nxt").click(() => {
//   for (i = 1; i <= 3; i++) {
//     const haveIt = $(`.carousel-item:nth-child(${i - 1})`).hasClass("active");
//     if (haveIt) {
//       $(`.carousel-item:nth-child(${i - 1})`).removeClass("active");
//     }
//     $(`.carousel-item:nth-child(${i})`).addClass("active");
//   }
// });

// $(".btn-prev").click(() => {
//   for (i = 1; i <= 3; i++) {
//     const haveIt = $(`.carousel-item:nth-child(${i + 1})`).hasClass("active");
//     if (haveIt) {
//       $(`.carousel-item:nth-child(${i + 1})`).removeClass("active");
//     }
//     $(`.carousel-item:nth-child(${i})`).addClass("active");
//   }
// });

let i = 1;

$(`.carousel-item:nth-child(${i})`).addClass("active");

$(".btn-nxt").click(() => {
  const carouselLength = $(".carousel-list").children().length;

  $(".carousel-item").removeClass("active");

  // if (i === 3) {
  //   i = 1;
  // } else {
  //   i++;
  // }
  // 위의 if문을 삼항 연산자로 표현
  i = i === carouselLength ? 1 : i + 1;

  $(`.carousel-item:nth-child(${i})`).addClass("active");
});

$(".btn-prev").click(() => {
  const carouselLength = $(".carousel-list").children().length;

  $(".carousel-item").removeClass("active");

  // if (i === 1) {
  //   i = 3;
  // } else {
  //   i--;
  // }
  // 위의 if문을 삼항 연산자로 표현
  i = i === 1 ? carouselLength : i - 1;

  $(`.carousel-item:nth-child(${i})`).addClass("active");
});

const pageSize = 10;
let totalResults = 0;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category") || "general";
const country = urlParams.get("country") || "kr";
const page = urlParams.get("page") || "1";
const q = urlParams.get("q");

$(".select-country").val(country);
$(".input-q").val(q);
$("#input-country").val(country);
$("#input-category").val(category);

$(document).on("click", ".page", (e) => {
  const page = $(e.target).text();
  urlParams.set("page", page);
  window.location.search = urlParams.toString();
});
$(document).on("click", ".page-prev", (e) => {
  urlParams.set("page", page - 1);
  window.location.search = urlParams.toString();
});
$(document).on("click", ".page-next", (e) => {
  urlParams.set("page", +page + 1);
  window.location.search = urlParams.toString();
});

$(".select-country").change((e) => {
  const country = e.target.value;

  urlParams.set("country", country);
  window.location.search = urlParams.toString();
});

$(".form-search").submit((e) => {
  // e.preventDefault();
  // q = $(".input-q").val();
  // getArticles();
});

$(".category-list").on("click", "a", (e) => {
  e.preventDefault();
  const category = $(e.currentTarget).data("link");
  urlParams.set("category", category);
  window.location.search = urlParams.toString();
});

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

const renderArticle = (article) => {
  const { url, urlToImage, title, description, publishedAt } = article;
  return `
    <li class="news-item">
        <a href="${url}" target="_blank">
            <article>
                <img class="img-article" src="${urlToImage}" />
                <h2>${title}</h2>
                <p>${description}</p>
                <span>${publishedAt.substr(0, 16).split("T").join(" ")}</span>
            </article>
        </a>
    </li>
  `;
};

const renderPagination = () => {
  // 1. 1을 뺀다
  // 2. pageSize=10 으로 나눈다.
  // 3. 소수점 버림
  // 4. 1을 더한다

  const startPage = Math.floor((page - 1) / 10) * 10 + 1;
  const totalPage = Math.floor((totalResults - 1) / pageSize) + 1;
  const lastPage = startPage + 9 > totalPage ? totalPage : startPage + 9;

  let html = `<ul class="page-list">`;
  html += startPage > 1 ? "<li class='page-prev'>이전</li>" : "";
  for (let i = startPage; i <= lastPage; i++) {
    const currentPage = i === +page ? " current-page" : "";
    html += `<li class="page-item${currentPage}">${i}</li>`;
  }

  if (page < totalPage) {
    html += "<li class='page-next'>다음</li>";
  }
  html += `</ul>`;

  $(".pagination").html(html);
};

$(document).on("click", ".page-item", (e) => {
  const page = $(e.target).text();
  urlParams.set("page", page);
  window.location.search = urlParams.toString();
  getArticles();
});
$(document).on("click", ".page-prev", (e) => {
  urlParams.set("page", page - 1);
  window.location.search = urlParams.toString();
  getArticles();
});
$(document).on("click", ".page-next", (e) => {
  urlParams.set("page", +page + 1);
  window.location.search = urlParams.toString();
  getArticles();
});

const getArticles = () => {
  const url = "https://newsapi.org/v2/top-headlines";
  const method = "get";
  const headers = {
    "X-Api-Key": "7e0ae03bd3b24474890cfc59f3273e9e",
  };
  const data = {
    country,
    q,
    category,
    pageSize,
    page,
  };
  const success = (result) => {
    console.log(result);
    const { articles } = result;

    const arr = articles.map((article) => renderArticle(article));
    const html = arr.join("");
    $(".news-list").html(html);

    totalResults = result.totalResults;
    renderPagination();
  };

  $.ajax({
    url,
    method,
    headers,
    data,
    success,
  });
};
$(".select-country").change((e) => {
  const country = e.target.value;

  urlParams.set("country", country);
  window.location.search = urlParams.toString();

  // getArticles();
});

$(".form-search").submit((e) => {
  // e.preventDefault();
  // q = $(".input-q").val();
  // getArticles();
});
// $(".input-q").keydown((e) => {
//   q = $(e.target).val();
//   getArticles();
// });

$(".category-list").on("click", "a", (e) => {
  e.preventDefault();
  const category = $(e.currentTarget).data("link");
  urlParams.set("category", category);
  window.location.search = urlParams.toString();
});

getArticles();

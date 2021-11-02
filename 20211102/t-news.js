let country = "kr";
let q = "";
let page = "1";
const pageSize = 10;
let totalResults = 0;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

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

  const lastPage = Math.floor((totalResults - 1) / pageSize) + 1;

  let html = `<ul class="page-list">`;
  for (let i = 1; i <= lastPage; i++) {
    html += `<li class="page-item">${i}</li>`;
  }
  html += `</ul>`;

  $(".pagination").html(html);
};

$(document).on("click", ".page-item", (e) => {
  page = $(e.target).text();
  getArticles();
});

const getArticles = () => {
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines",
    method: "get",
    headers: {
      "X-Api-Key": "0e5fa25006524160ba95ac08cead4c26",
    },
    data: {
      country: country,
      q: q,
      category: category,
      pageSize: pageSize,
      page: page,
    },
    success: (result) => {
      console.log(result);
      const articles = result.articles;
      // const { articles } = result;

      const arr = articles.map((articles, i) => {
        return renderArticle(articles);
      });
      const html = arr.join("");
      $(".news-list").html(html);

      // for문으로 articles 갯수만큼 타이틀 출력
      // let html = "";
      // for (let i = 0; i < articles.length; i++) {
      //   html += renderArticle(articles[i]);
      // }
      // $(".news-list").html(html);

      totalResults = result.totalResults;
      renderPagination();
    },
  });
};
$(".select-country").change((e) => {
  country = e.target.value;
  getArticles();
});

$(".form-search").submit((e) => {
  e.preventDefault();
  q = $(".input-q").val();
  getArticles();
});
// $(".input-q").keydown((e) => {
//   q = $(e.target).val();
//   getArticles();
// });

getArticles();

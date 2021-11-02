let country = "kr";
let q = "";
let page = "1";
const pageSize = 10;
let totalResults = 0;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

const renderArticle = (article) => {
  const { url, urlToImage, title, description } = article;
  return `
          <div class='each-article'>
              <a href='${url}' target='_black'
                <article>
                  <img src='${urlToImage}' />
                  <h2>${title}</h2>
                  <p>${description}</p>
                </article>
              </a>
            </div>
          `;
};

const renderPagination = () => {
  const lastPage = Math.floor((totalResults - 1) / pageSize) + 1;
  let html = `<ul>`;

  for (let i = 1; i <= lastPage; i++) {
    html += `<li class='page'>${i}</li>`;
  }

  html += `</ul>`;

  $(".pagination").html(html);
};

$(document).on("click", ".page", (e) => {
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
      // key, value 값이 같다면 생략가능
      // country: country
      country,
      q,
      category,
      page,
    },
    success: (result) => {
      console.log(result);

      // // for문으로 다 가져오기

      const articles = result.articles;
      // // const { result } = articles; 위와 같다

      // for (let i = 0; i < articles.length; i++) {
      //   $("#app").append(`<p>${articles[i].title}</p>`);
      // }

      // const articles = result.articles;
      // const { articles } = result;

      // let html = "";
      // for (let i = 0; i < articles.length; i++) {
      //   html += renderArticle(articles[i]);
      // }
      // for문 대신 map함수 쓰기
      // const arr = articles.map((articles) => {
      //   return renderArticle(articles);
      // })
      // $("#app").html(arr.join(''));

      // 위와같다
      const arr = articles.map((articles) => renderArticle(articles));
      const html = arr.join("");
      $("#app").html(html);

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

getArticles();

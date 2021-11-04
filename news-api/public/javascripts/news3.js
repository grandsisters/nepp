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
           <div class='each-article'>
              <a href='${url}' target='_black'
                <article>
                  <img src='${urlToImage}' />
                  <h2>${title}</h2>
                  <p>${description}</p>
                  <span>${publishedAt.substr(0, 16).split("T").join(" ")}</span>
                </article>
              </a>
            </div>
         `;
};

const renderPagination = () => {
  const startPage = Math.floor((page - 1) / 10) * 10 + 1;
  const totalPage = Math.floor((totalResults - 1) / pageSize) + 1;
  const lastPage = startPage + 9 > totalPage ? totalPage : startPage + 9;

  let html = `<ul>`;
  html += startPage > 1 ? "<li class='page-pre'>이전</li>" : "";
  for (let i = startPage; i <= lastPage; i++) {
    const currentPage = i === +page ? " current-page" : "";
    html += `<li class='page${currentPage}'>${i}</li>`;
  }

  if (page < totalPage) {
    html += "<li class='page-next'>다음</li>";
  }

  $(".pagination").html(html);
};

$(document).on("click", ".page", (e) => {
  const page = $(e.target).text();
  urlParams.set("page", page);
  window.location.search = urlParams.toString();
  // getArticles();
});
$(document).on("click", ".page-prev", (e) => {
  urlParams.set("page", page - 1);
  window.location.search = urlParams.toString();
  // getArticles();
});
$(document).on("click", ".page-next", (e) => {
  urlParams.set("page", +page + 1);
  window.location.search = urlParams.toString();
  // getArticles();
});

const getArticles = () => {
  const url = "https://newsapi.org/v2/top-headlines";
  const method = "get";
  const headers = {
    "X-Api-Key": "0e5fa25006524160ba95ac08cead4c26",
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
    // renderPagination();
  };

  $.ajax({
    data,
    url,
    method,
    headers,
    data,
    success,
    // key, value 값이 같다면 생략가능
    // country: country
  });
};
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

// getArticles();

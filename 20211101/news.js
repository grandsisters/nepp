let country = "kr";

const getArticles = () => {
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines",
    method: "get",
    data: {
      apiKey: "0e5fa25006524160ba95ac08cead4c26",
      country,
    },
    success: (result) => {
      // console.log(result);

      // // for문으로 다 가져오기

      // const articles = result.articles;
      // // const { result } = articles; 위와 같다

      // for (let i = 0; i < articles.length; i++) {
      //   $("#app").append(`<p>${articles[i].title}</p>`);
      // }

      const articles = result.articles;
      let html = "";
      for (let i = 0; i < articles.length; i++) {
        html += `
      <div class='each-article'>
        <a href='${articles[i].url}' target='_black'
          <article>
            <img src='${articles[i].urlToImage}' />
            <h2>${articles[i].title}</h2>
            <p>${articles[i].description}</p>
          </article>
        </a>
      </div>`;
      }
      $("#app").html(html);
    },
  });
};
$(".select-country").change((e) => {
  country = e.target.value;
  getArticles();
});

getArticles();

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2em;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const smapleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160",
// };

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const responese = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0e5fa25006524160ba95ac08cead4c26`);
        setArticles(responese.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoding(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

import React, { useState } from "react";
import NewsList from "./NewsList";
import Categories from "./Categories";

const News = () => {
  const [category, setCategory] = useState("sport");
  const onSelect = (category) => setCategory(category);
  return (
    <div>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </div>
  );
};

export default News;

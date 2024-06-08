import React from "react";
import Index from "../Components/Index";

const IndexPage = ({ articles, setArticles}) => {
  return (
    <div>
      <Index articles={articles} setArticles={setArticles} />
    </div>
  );
};

export default IndexPage;

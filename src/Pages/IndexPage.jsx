import React from "react";
import Index from "../Components/Index";

const IndexPage = ({ articles, setArticles, setTitle }) => {
  return (
    <div>
      <Index articles={articles} setArticles={setArticles} setTitle={setTitle} />
    </div>
  );
};

export default IndexPage;

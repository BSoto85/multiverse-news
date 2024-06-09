import React from "react";
import Detail from "../Components/Detail";

const DetailsPage = ({ title, article, setArticle }) => {
  return (
    <div>
      <Detail title={title} article={article} setArticle={setArticle} />
    </div>
  );
};

export default DetailsPage;

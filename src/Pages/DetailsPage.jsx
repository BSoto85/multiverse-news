import React from "react";
import Detail from "../Components/Detail";

const DetailsPage = ({
  selectedArticle,
  setSelectedArticle,
  selectedArticleContext,
  setSelectedArticleContext,
}) => {
  return (
    <div>
      <Detail
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
        selectedArticleContext={selectedArticleContext}
        setSelectedArticleContext={setSelectedArticleContext}
      />
    </div>
  );
};

export default DetailsPage;

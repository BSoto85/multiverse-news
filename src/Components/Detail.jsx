import React from "react";
import WhatIf from "./WhatIf";

const Detail = ({ selectedArticleContext, setSelectedArticleContext }) => {
  return (
    <div>
      <WhatIf selectedArticleContext={selectedArticleContext} />
    </div>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
const url =
  "https://api.worldnewsapi.com/search-news?text=earth+quake&language=en&earliest-publish-date=2024-04-01";
// "https://api.worldnewsapi.com/extract-news?url=https://nypost.com/2024/04/02/us-news/lawmakers-demand-to-know-if-taxpayers-funded-al-shabaab-terrorist/";
const apiKey = "bc9aa6400b3b4925aca424cf05969a54";

const WorldNewsTest = () => {
  const [article, setArticle] = useState();

  const handleTextChange = (e) => {
    setArticle(e.target.value);
  };

  // useEffect(() => {
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "x-api-key": apiKey,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setArticle(data))
  //     .catch((error) =>
  //       console.error("There was a problem with the fetch operation:", error)
  //     );
  // }, []);
  console.log(article);

  return (
    <div>
      <button>Search for articles</button>
      <form onSubmit={handleSubmit} action="search">
        <label htmlFor="search input">Search</label>
        <input
          value={article}
          type="text"
          onChange={handleTextChange}
          id="search"
        />
      </form>
    </div>
  );
};

export default WorldNewsTest;

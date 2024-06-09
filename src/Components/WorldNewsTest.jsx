import React, { useEffect, useState } from "react";

const extractURL = import.meta.env.VITE_BASE_EXTRACT_URL;
const extractKey = import.meta.env.VITE_WORLD_API_KEY;

const WorldNewsTest = () => {
  const [article, setArticle] = useState();

  const handleTextChange = (e) => {
    setArticle(e.target.value);
  };

  // useEffect(() => {
  //   fetch(extractURL, {
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

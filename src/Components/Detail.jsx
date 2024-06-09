import axios from "axios";
import WhatIf from "./WhatIf";
import { useEffect, useState } from "react";

const searchURL = import.meta.env.VITE_BASE_SEARCH_URL;

const Detail = ({ title }) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorldNews = async () => {
      const url = `${searchURL}?text=${title}&language=en`;
      const apiKey = import.meta.env.VITE_SEARCH_API_KEY;

      try {
        const response = await axios.get(url, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setArticle(response.data.news[0]);
        console.log(response);
        setError(null);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to fetch world news. Please try again later.");
      }
    };

    // fetchWorldNews();
  }, []);
  console.log("WORLD", article);
  console.log("Title", title);

  return (
    <div>
      <WhatIf article={article} />
    </div>
  );
};

export default Detail;

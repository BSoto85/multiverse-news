import axios from "axios";
import WhatIf from "./WhatIf";
import { useEffect, useState } from "react";

const searchURL = import.meta.env.VITE_BASE_SEARCH_URL;

const Detail = ({ title }) => {
  const [worldNews, setWorldNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorldNews = async () => {
      const url = `${searchURL}?text=${title}`;
      const apiKey = import.meta.env.VITE_SEARCH_API_KEY;

      try {
        const response = await axios.get(url, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setWorldNews(response.data.news[0]);
        setError(null);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to fetch world news. Please try again later.");
      }
    };

    // fetchWorldNews();
  }, []);

  // Write another fetch call with the URL from the article returned in worldnews.news[0].url. This will be the variable used in fetch

  return (
    <div>
      <WhatIf />
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <ul>
          {worldNews.map((newsItem, index) => (
            <li key={index}>
              <h3>{newsItem.title}</h3>
              <p>{newsItem.description}</p>
              {/* <a href={newsItem.url} target="_blank" rel="noopener noreferrer">Read more</a> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;

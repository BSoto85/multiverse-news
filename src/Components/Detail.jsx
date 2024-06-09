
import axios from "axios";
import WhatIf from "./WhatIf";
import { useEffect, useState } from "react";



const Detail = ({title}) => {
  const [worldNews, setWorldNews] = useState([]);
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchWorldNews = async () => {
      const url = `https://api.worldnewsapi.com/search-news?text=${title}`;
      const apiKey = '516b78b5bbe34582af84ae35bbdb1a50';

      try {
        const response = await axios.get(url, {
          headers: {
            'x-api-key': apiKey,
          },
        });
        // const newsWithIds = response.data.news.map(news => ({ ...news, id: uuidv4() }));
        setWorldNews(response.data.news);
        setError(null);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setError("Failed to fetch world news. Please try again later.");
      }
    };

    fetchWorldNews();
  }, [])
  return (
    <div>
      <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
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

      <WhatIf />
    </div>
  );
};

export default Detail;

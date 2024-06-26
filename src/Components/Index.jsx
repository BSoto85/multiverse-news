import { useState } from "react";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/index.css";

const URL = import.meta.env.VITE_BASE_URL;
const NYTKey = import.meta.env.VITE_NYT_API_KEY;

const Index = ({ articles, setArticles, setTitle }) => {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [error, setError] = useState(null);
  // const navigate = useNavigate()

  const formatDate = (pubDate) => {
    const date = new Date(pubDate);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };
  const [displayDate, setDisplayDate] = useState(formatDate(new Date()));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${URL}/${year}/${month}.json?api-key=${NYTKey}`;
      const response = await axios.get(url);
      const articles = response.data.response.docs.slice(0, 28);
      setArticles(articles);
      setError(null);
      const formattedDate =
        articles.length > 0
          ? formatDate(articles[0].pub_date)
          : "No articles found";

      setDisplayDate(formattedDate);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch articles. Please check the year and month.");
      setDisplayDate("");
    }
  };

  function getTitle(/*titleString*/) {
    // const alphanumeric = /[a-z0-9]/gi
    // const words = titleString.split(' ')
    // for(let i = 0; i < words.length; i++){
    //   const newWord = words[i].match(alphanumeric).join('')
    //   words[i] = newWord
    // }
    // setTitle(words.join("+"))
    navigate("/details");
  }

  return (
    <div className="main__wrapper">
      <main>
        <form onSubmit={handleSubmit} className="search">
          <input
            type="number"
            className="searchTerm"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <input
            type="number"
            className="searchTerm"
            placeholder="Month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
        <aside>
          <div>
            <div className="issue">Issue #1</div>
            <div
              className={`date ${
                displayDate !== formatDate(new Date()) ? "searched-date" : ""
              }`}
            >
              {displayDate || `June, 2024`}
            </div>
            <div className="edition">Team 1 Edition</div>
          </div>
        </aside>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {articles.map((article) => (
          <div key={article._id}>
            <div className="article-container">
              <div onClick={() => getTitle(/*article.headline.main*/)}>
                <h2 className="title--large main-title">
                  {article.headline.main}
                </h2>
              </div>
              <div className="main-text multi-column">
                <p>{article.snippet}</p>
                <a
                  href={article.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Index;

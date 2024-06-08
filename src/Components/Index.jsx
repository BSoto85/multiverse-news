import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/index.css';

const Index = ({ articles, setArticles }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = 'bYrbIvSILpBQKLtyTB5VFmGqwCdZ3N9G';
      const url = `https://corsproxy.io/?https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`;
      const response = await axios.get(url);
      const articles = response.data.response.docs.slice(0, 28);
      setArticles(articles);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch articles. Please check the year and month.');
    }
  };

  return (
    <div className="main__wrapper">
      <main>
        <h1>Journey Times</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input 
            type="number" 
            placeholder="Enter year" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            required
          />
          <input 
            type="number" 
            placeholder="Enter month" 
            value={month} 
            onChange={(e) => setMonth(e.target.value)} 
            required
          />
          <button type="submit">Search</button>
        </form>
        <aside>
          <div>
            <div className="issue">Issue #1</div>
            <div className="date">Tuesday, 08 June, 2024</div>
            <div className="edition">Team 1 Edition</div>
          </div>
        </aside>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {articles.map(article => (
          <div key={article._id} className="article-container">
            <Link to={`/article/${article._id}`}>
              <h2 className="title--large main-title">{article.headline.main}</h2>
            </Link>
            <div className="main-text multi-column">
              <p>{article.snippet}</p>
              <a href={article.web_url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Index;

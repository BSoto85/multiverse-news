import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import IndexPage from "./Pages/IndexPage";
import DetailsPage from "./Pages/DetailsPage";
import AboutPage from "./Pages/AboutPage";
import { useState } from "react";

const App = () => {
  const [articles, setArticles] = useState([]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/index" element={<IndexPage articles={articles} setArticles={setArticles} />} />
        <Route path="/index/:id" element={<DetailsPage articles={articles} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;

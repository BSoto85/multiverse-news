import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import IndexPage from "./Pages/IndexPage";
import DetailsPage from "./Pages/DetailsPage";
import AboutPage from "./Pages/AboutPage";
import { useState } from "react";

const App = () => {
  const [selectedArticle, setSelectedArticle] = useState({});
  const [selectedArticleContext, setSelectedArticleContext] = useState("");
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route
          path="/index/:id"
          element={
            <DetailsPage
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
              selectedArticleContext={selectedArticleContext}
              setSelectedArticleContext={setSelectedArticleContext}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;

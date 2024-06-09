import React, { useState } from "react";

import OpenAI from "openai";
const KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: KEY, dangerouslyAllowBrowser: true });

const WhatIf = ({ article }) => {
  const [articleSummary, setArticleSummary] = useState("");
  const [summaryButtonSelected, setSummaryButtonSelected] = useState(false);
  const [whatIf, setWhatIf] = useState("");
  const [whatIfArticle, setWhatIfArticle] = useState("");
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  async function summarizer() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a newspaper editor. You take a full article and summarize the main points into 1 or 2 paragraphs.",
        },
        {
          role: "user",
          content: `${article.title}\n${article.text}`,
        },
      ],
      model: "gpt-3.5-turbo-0125",
    });
    setArticleSummary(completion.choices[0].message.content);
    setSummaryButtonSelected(!summaryButtonSelected);
  }

  async function whatIfScenario() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a journalist writing for the New York Times. Your task is to receive two inputs, one is an article summary from the NYT archive, the other is a user prompt asking a question for a 'what if' (fictional) scenario. Write an article based on the summary and 'what if' scenario as if the situation actually happened. Return a complete article with a title. Example Input 1: Advocates of free-market capitalism believe they have triumphed over socialism, asserting that American-style capitalism outperforms both the Asian and European economic models in creating wealth and material progress. They predict a global transformation where technological advancements and integration will elevate worldwide prosperity and expand the middle class. Capitalism is spreading to new regions, with stock markets emerging globally and private enterprise becoming dominant.The technological revolution, particularly the internet, is connecting the world like never before, enabling small businesses to compete globally and pressuring nations to adopt American economic practices by easing regulations and taxes. However, this push toward American-style capitalism faces resistance. The Asian economic collapse of 1997 highlighted the risks of uncontrolled capital flows, and free trade, despite its benefits, has significant losers with substantial political influence. Protests at the World Trade Organization meeting in Seattle reflected fears of world government and demands for stricter environmental and labor standards.Suspicion is growing, even in America, that globalism primarily benefits big businesses. A poll showed that Americans feel their government prioritizes multinational corporations over ordinary citizens. Critics argue that multinational corporations seek an international trade system that serves their interests, potentially creating a global bureaucracy beyond the control of ordinary people. Example Input 2: What if America were communist?",
        },
        {
          role: "user",
          content: `Input 1: ${articleSummary} Input2: What if ${whatIf}`,
        },
      ],
      model: "gpt-3.5-turbo-0125",
    });
    console.log("Response", completion.choices[0].message.content);
    return completion.choices[0].message.content;
  }

  const handleTextChange = (e) => {
    setWhatIf(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!whatIf) {
      window.alert("Please add a 'what if' scenario.");
    }
    const retrievingScenario = await whatIfScenario();
    if (retrievingScenario) setWhatIfArticle(retrievingScenario);
    setSubmitButtonClicked(true);
    setWhatIf("");
  };

  console.log("Summary", articleSummary);
  console.log("What if", whatIf);
  console.log("What if article", whatIfArticle);

  return (
    <div className="column">
      <div className="left-container article-container">
        <div className="form-container">
          <button className="submit-button" onClick={summarizer}>
            {summaryButtonSelected ? "Full Article" : "Summarize"}
          </button>
          <form onSubmit={handleSubmit} action="submit" className="inline-form">
            <label htmlFor="what-if-scenario">What if:</label>
            <input
              onChange={handleTextChange}
              id="what-if-scenario"
              value={whatIf}
              type="text"
              className="input-text"
            />
            <button className="submit-button">Submit</button>
          </form>
        </div>

        <p>{summaryButtonSelected ? articleSummary : article.text}</p>
      </div>
      {submitButtonClicked && (
        <div className="right-container">
          <p>{whatIfArticle}</p>
        </div>
      )}
    </div>
  );
};

export default WhatIf;

import React, { useState, useEffect } from "react";
import SampleQuotes from "../data/sampleQuotes";
import QuoteService from "../services/quoteServices";

function Quote(props) {
  let quotes = [];
  const [currentQuote, setCurrentQuote] = useState({});

  const getQuotes = async () => {
    try {
      const quoteService = new QuoteService();
      quotes = await quoteService.getRandomQuotes();
    } catch (error) {
      quotes = SampleQuotes.getLocalData();
    }
  };

  const getRandomQuote = () => {
    let quote = { quote: "", author: "" };
    if (quotes.length > 0) {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      quote.quote = `"${quotes[randomIndex].q}"`;
      quote.author = `- ${quotes[randomIndex].a}`;
    }
    return quote;
  };

  useEffect(() => {
    getQuotes();
    const quoteInterval = setInterval(() => {
      let randomQuote = getRandomQuote();
      setCurrentQuote((prevQuote) => (prevQuote = randomQuote));
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <React.Fragment>
      <div className="quote">
        <h1>{currentQuote.quote || `Random quote app.`}</h1>
        <h2>{currentQuote.author || `Alvin B. Almodal`}</h2>
      </div>
    </React.Fragment>
  );
}

export default Quote;

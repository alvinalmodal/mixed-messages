import React, { useState, useEffect } from "react";
import SampleQuotes from "../data/sampleQuotes";
import QuoteService from "../services/quoteServices";

function Quote(props) {
  const [quotes, setQuotes] = useState(0);
  const [currentQuote, setCurrentQuote] = useState({});

  const getQuotes = async () => {
    try {
      const quoteService = new QuoteService();
      let quotes = await quoteService.getRandomQuotes();
      setQuotes(quotes);
    } catch (error) {
      setQuotes(SampleQuotes.getLocalData());
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
    setCurrentQuote(getRandomQuote);
    const quoteInterval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <React.Fragment>
      <div className="quote">
        <h1>{currentQuote.quote}</h1>
        <h2>{currentQuote.author}</h2>
      </div>
    </React.Fragment>
  );
}

export default Quote;

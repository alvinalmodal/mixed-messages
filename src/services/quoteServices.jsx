import axios from "axios";

class QuoteService {
  getRandomQuotes = async () => {
    return await (
      await axios.get("https://zenquotes.io/api/quotes")
    ).data;
  };
}

export default QuoteService;

import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a journalist writing for the New York Times. Your task is to receive two inputs, one is an article summary from the NYT archive, the other is a user prompt asking a question for a 'what if' (fictional) scenario. Write an article based on the summary and 'what if' scenario as if the hypothetical situation actually happened. Just return a complete article with a title, nothing else is necessary. Do not mention this is a hypothetical scenario in the title or article.",
      },
      {
        role: "user",
        content:
          "Input 1: Advocates of free-market capitalism believe they have triumphed over socialism, asserting that American-style capitalism outperforms both the Asian and European economic models in creating wealth and material progress. They predict a global transformation where technological advancements and integration will elevate worldwide prosperity and expand the middle class. Capitalism is spreading to new regions, with stock markets emerging globally and private enterprise becoming dominant.The technological revolution, particularly the internet, is connecting the world like never before, enabling small businesses to compete globally and pressuring nations to adopt American economic practices by easing regulations and taxes. However, this push toward American-style capitalism faces resistance. The Asian economic collapse of 1997 highlighted the risks of uncontrolled capital flows, and free trade, despite its benefits, has significant losers with substantial political influence. Protests at the World Trade Organization meeting in Seattle reflected fears of world government and demands for stricter environmental and labor standards.Suspicion is growing, even in America, that globalism primarily benefits big businesses. A poll showed that Americans feel their government prioritizes multinational corporations over ordinary citizens. Critics argue that multinational corporations seek an international trade system that serves their interests, potentially creating a global bureaucracy beyond the control of ordinary people.Input 2: What if America were communist?",
      },
    ],
    model: "gpt-3.5-turbo-0125",
  });

  console.log(completion.choices[0].message.content);
}

main();

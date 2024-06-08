import OpenAI from "openai";

const KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: KEY, dangerouslyAllowBrowser: true });

// summarizer();

// export

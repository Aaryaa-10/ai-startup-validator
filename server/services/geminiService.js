import dotenv from "dotenv";

dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

export const analyzeStartupIdea = async (
    startupName,
    idea ) => {
       const prompt = `
Analyze this startup.

Startup Name: ${startupName}

Idea:
${idea}

Return a startup score from 0 to 100 based on:
- Market Potential
- Scalability
- Monetization Potential
- Competitive Advantage
- Execution Feasibility

Return ONLY raw JSON.

Do not use markdown.
Do not use code blocks.
Do not use \`\`\`json.

Return this exact structure:

{
  "score": 0,
  "marketPotential": "",
  "strengths": [],
  "weaknesses": [],
  "risks": [],
  "revenueSuggestions": [],
  "verdict": ""
}
`;

    const result = await model.generateContent(prompt);

   const response = result.response.text();

const cleanResponse = response
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanResponse);
    };
export default model;
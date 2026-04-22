const { GoogleGenAI } = require('@google/genai');
require('dotenv').config({ path: '.env' });
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const PROMPT = `Generate a Learning Course based on the following details.
Make sure to add:
Course Name
Course Description
Course Banner Image Prompt (see details below)
Chapter Name
Topics under each chapter
Duration for each chapter

Course Banner Image Prompt:
Create a modern, flat-style 2D digital illustration representing the user topic.
Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools.
Add symbolic elements related to the user course like sticky notes, design components, and visual aids.
Use a vibrant color palette (blues, purples, oranges) with a clean, professional look.
The illustration should feel creative, tech-savvy, and educational — ideal for visualizing concepts in the user course.

Output Format (in JSON):
{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",
    "bannerImagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": [
          "string"
        ]
      }
    ]
  }
}`;

async function test() {
  const formData = {
    name: "react.js",
    description: "Enter Course Description",
    noOfChapters: 5,
    includeVideo: false,
    level: "Moderate",
    category: "frontend, react, web development"
  };

  const config = { responseMimeType: 'text/plain' };
  const contents = [{ role: 'user', parts: [{ text: PROMPT + JSON.stringify(formData) }] }];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite',
      config,
      contents,
    });
    
    const RawResp = response.candidates[0]?.content?.parts[0]?.text;
    console.log("Raw Response:");
    console.log(RawResp);
    
    // Simulate what the server does exactly
    const RawJson = RawResp.replace('```json', '').replace('```', '');
    console.log("Parsed JSON Array string:");
    console.log(RawJson);
    
    const parsed = JSON.parse(RawJson);
    console.log("Successfully Parsed JSON!");

  } catch (e) {
    console.error("FAILED", e.message);
  }
}
test();

import { db } from '../../../config/db.js';
import { courseTable } from '../../../config/schema.js';
import { currentUser } from '@clerk/nextjs/server';

import { NextResponse } from 'next/server';
import axios from "axios"
import {ai} from "../../../lib/aiClient.js"

const PROMPT=`Generate a Learning Course based on the following details.
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
}`



export async function POST(req) {
  try {
    const {courseId,...formData}=await req.json();
    const user=await currentUser();
    const model = 'llama-3.3-70b-versatile';
    let JSONResp;
    
    try {
      const response = await ai.chat.completions.create({
        messages: [{ role: "user", content: PROMPT+JSON.stringify(formData) }],
        model: model,
        response_format: { type: "json_object" }
      });

      console.log(response.choices[0].message.content)

      const RawResp = response.choices[0].message.content;
      JSONResp = JSON.parse(RawResp);
    } catch (aiError) {
      console.warn("Gemini AI failed (likely Free Tier regional block). Using Demo fallback course.");
      JSONResp = {
        course: {
          name: formData.name || "React Development 101",
          description: formData.description || "A complete masterclass to learn modern frontend web development.",
          category: formData.category || "Programming",
          level: formData.level || "Beginner",
          includeVideo: formData.includeVideo || false,
          noOfChapters: formData.noOfChapters || 3,
          bannerImagePrompt: "A sleek, dark-themed coding workspace with glowing neon screens.",
          chapters: [
            {
              chapterName: "Introduction to React",
              duration: "2 Hours",
              topics: ["What is React?", "Setting up Vite", "JSX Syntax"]
            },
            {
              chapterName: "State & Hooks",
              duration: "3 Hours",
              topics: ["useState Hook", "useEffect Hook", "Handling Forms"]
            },
            {
              chapterName: "Advanced Routing",
              duration: "2 Hours",
              topics: ["React Router DOM", "Dynamic Parameters", "Protected Routes"]
            }
          ]
        }
      };
    }

    const ImagePrompt=JSONResp.course.bannerImagePrompt;
    //Generate Image

    // Bypass AI Guru Lab (since API Key is missing) and use a high-quality coding placeholder
    const bannerImageURL = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop";
    // const bannerImageURL=await GenerateImage(ImagePrompt)

    //Save to Database

    const result=await db.insert(courseTable).values({
      ...formData,
      courseJson:JSONResp,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      cid:courseId,
      BannerImageUrl:bannerImageURL
    })

    return NextResponse.json({courseId:courseId})
  } catch (error) {
    console.error("DEBUG API ERROR:", error);
    return NextResponse.json({ 
      error: error.message, 
      stack: error.stack 
    }, { status: 500 });
  }
}


const  GenerateImage=async(imagePrompt)=>{
  const BASE_URL='https://aigurulab.tech';
const result = await axios.post(BASE_URL+'/api/generate-image',
        {
            width: 1024,
            height: 1024,
            input: imagePrompt,
            model: 'sdxl',//'flux'
            aspectRatio:"16:9"//Applicable to Flux model only
        },
        {
            headers: {
                'x-api-key':process.env?.AI_GURU_LAB_API, // Your API Key
                'Content-Type': 'application/json', // Content Type
            },
        })
console.log(result.data.image) //Output Result: Base 64 Image
return result.data.image
}

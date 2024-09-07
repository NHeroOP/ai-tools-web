import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const prompt = (text: string) => {
  return `As a professional summarizer, create a concise and comprehensive summary of the provided text: [${text}]. Ensure the summary is detailed, capturing main ideas and essential information while eliminating extraneous language. Focus strictly on the provided text, without incorporating external information. Format the summary in paragraph form for readability. The response must be a JSON object structured as follows: { "summary": "your summary here", "title": "suitable title here" }, using double quotes for both keys and values. Ensure that all control characters, such as newlines, tabs, or other special characters, are properly escaped. For line breaks, use \\n, and for single quotes, use \\". Return only the JSON object as described, with no additional information.`;
}

export async function POST(req: Request) {
  const { text } = await req.json()

  if (!text) {
    return Response.json({
      error: "Text is required"
    }, {status: 400});
  }

  try {
    const res = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt(text),
        },
      ],
      model: "llama3-70b-8192",
    });
    
    let content: any = res.choices[0].message.content;
    console.log("content", content);
    
    
    const jsonContent = content.match(/{[\s\S]*}/);
    
    if (!jsonContent) {
      return Response.json({
        error: "Failed to parse JSON"
      }, {status: 500});
    }

    let jsonString = jsonContent[0].trim();
    
    const summaryObj = JSON.parse(jsonString);
    return NextResponse.json(summaryObj, { status: 200 });
    
  }
  catch (error: any) {
    return Response.json({
      error: error.message
    }, {status: 500});
  }
  
}
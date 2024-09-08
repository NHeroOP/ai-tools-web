import { GoogleGenerativeAI } from "@google/generative-ai";

const instruction = `You are a versatile text summarization expert capable of handling text, files, and links. Produce concise and informative summaries in JSON format: {"summary": "A detailed summary", "title": "A suitable title"}. Ensure summaries are comprehensive, capturing main ideas and eliminating extraneous language. Format summaries in paragraphs for readability. Handle various input formats: text, files (extract relevant content), links (fetch content, summarize based on URL if inaccessible). Ensure character escaping using \\n and \\". Return only the JSON object and nothing else.`

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text) {
    return Response.json({
      error: "Prompt is required"
    }, { status: 400 });
  }
   
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: instruction
  });

  try {
    const result = await model.generateContent(text);
    const match = result.response.text().match(/\{.*\}/)
    const summaryStringObj = match ? match[0] : undefined;

    if (!summaryStringObj) {
      return Response.json({
        error: "An error occurred while summarizing the text. Please try again."
      }, { status: 500 });
    }
  
    const summaryObj = JSON.parse(summaryStringObj)
    
    return Response.json(summaryObj, { status: 200 });
  }
  catch (error: any) {
    console.log(error);
    
    return Response.json({
      error: error.message
    }, { status: 500 });
    
  }
}
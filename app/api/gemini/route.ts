import { GoogleGenerativeAI, Part } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

type ResponseData =
  | {
      error: string;
    }
  | string;

type PromptFeedback = {
  blockReason?: string;
};
type GenerateContentResponse = {
  response: {
    promptFeedback?: PromptFeedback;
    candidates?: {
      content: {
        parts: {
          text: string;
        }[];
      };
    }[];
  };
};

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  if (prompt === "") {
    return NextResponse.json({ error: "fill all fields" }, { status: 400 });
  }

  try {
      if (!apiKey) {
          return NextResponse.json({ error: "GEMINI_API_KEY not found" }, { status: 500 });
      }
      
      const genAI = new GoogleGenerativeAI(apiKey);


      const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: {
            parts: [
              {
                text: `You are a helpful assistant. Please be concise and precise. 
                 **Your response must always be a valid JSON object with the following structure:
        
                 * **text_content:** the generated content.
                `,
              },
            ] as Part[],
            role: "model",
          },
        });
  
        const parts = [{ text: prompt }] as Part[];

      /**
       * generation config for gemini api calls
       * setting responseMimeType to JSON to get back response in json format
       */
      const generationConfig = {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
      };

    const result = (await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    })) as GenerateContentResponse;

    let response: ResponseData = "";

      if (
          result.response.promptFeedback &&
          result.response.promptFeedback.blockReason
      ) {
          response = {
            error: `Blocked for ${result.response.promptFeedback.blockReason}`,
          };
          return NextResponse.json(response, { status: 200 });
      }
        if(result.response.candidates && result.response.candidates[0].content.parts[0].text) {
         response = result.response.candidates[0].content.parts[0].text;
        return NextResponse.json(response, { status: 200 });
      }

      return NextResponse.json({ error: "Failed to get a valid response from Gemini" },{ status: 500 })

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to get a response from Gemini" }, { status: 500 });
  }
}
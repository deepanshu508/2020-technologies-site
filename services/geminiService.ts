import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Singleton chat instance for continuity within a session
let chatInstance: Chat | null = null;

export const getChatInstance = (): Chat => {
  if (!chatInstance) {
    chatInstance = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are "Recruiter AI", an expert talent acquisition assistant for 2020 Technologies.
        Your goal is to help candidates find their dream role or help employers define their needs.
        
        Tone: Professional, empathetic, encouraging, and concise. Think "Apple Genius Bar" but for careers.
        
        Capabilities:
        1. Analyze career goals.
        2. Suggest job titles based on skills.
        3. Provide tips for resume improvement.
        4. Explain the benefits of 2020 Technologies (premium network, vetted companies, human-centric approach).

        Keep responses under 150 words unless asked for detail. Use formatting like bullet points for readability.`,
        temperature: 0.7,
      },
    });
  }
  return chatInstance;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatInstance();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, but I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to our talent network right now. Please try again later.";
  }
};

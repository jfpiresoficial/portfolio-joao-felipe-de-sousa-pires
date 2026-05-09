import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateDiagram(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert Mermaid.js diagram generator. 
      Given the following description, generate ONLY the Mermaid code block. 
      Do not include " \`\`\`mermaid " tags, just the code itself.
      
      Prompt: ${prompt}`,
      config: {
        systemInstruction: "Generate clean, efficient Mermaid.js code. If the prompt is unclear, create a simple example related to the topic.",
      },
    });
    
    return response.text?.trim() || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}

export async function improveMarkdown(content: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Improve the following Markdown content. Fix formatting, clearity, and professional tone. Keep any Mermaid blocks as is.
      
      Content: ${content}`,
    });
    
    return response.text?.trim() || content;
  } catch (error) {
    console.error("Gemini Error:", error);
    return content;
  }
}

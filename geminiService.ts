import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Queue types and state
interface QueueItem {
  prompt: string;
  aspectRatio: "1:1" | "3:4" | "4:3" | "16:9";
  resolve: (value: string | null) => void;
}

const requestQueue: QueueItem[] = [];
let isProcessing = false;

// Delay in milliseconds between API calls to avoid rate limits
// Reduced to 2s to speed up loading, relying on fallback if it fails
const REQUEST_DELAY = 2000; 

// Fallback images based on keywords
const getFallbackImage = (prompt: string): string => {
  const p = prompt.toLowerCase();
  if (p.includes('forest') || p.includes('landscape')) return 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=1600'; // Dark forest
  if (p.includes('needle') || p.includes('pine')) return 'https://images.unsplash.com/photo-1579273166157-19d206dc897f?auto=format&fit=crop&q=80&w=1000'; // Pine needles
  if (p.includes('sunlight') || p.includes('sun')) return 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000'; // Sun rays
  if (p.includes('spoon') || p.includes('extract') || p.includes('oil')) return 'https://images.unsplash.com/photo-1615485925763-867862f8021c?auto=format&fit=crop&q=80&w=1000'; // Oil/Spoon
  if (p.includes('box') || p.includes('packaging')) return 'https://images.unsplash.com/photo-1632512908866-9d821361c471?auto=format&fit=crop&q=80&w=1000'; // Generic premium box
  if (p.includes('capsule') || p.includes('pill')) return 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1000'; // Pills
  if (p.includes('lab') || p.includes('scientist') || p.includes('factory')) return 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1000'; // Lab
  if (p.includes('elderly') || p.includes('couple') || p.includes('senior')) return 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'; // Elderly
  if (p.includes('certificate') || p.includes('award')) return 'https://images.unsplash.com/photo-1563225534-1188372d8c3f?auto=format&fit=crop&q=80&w=1000'; // Document
  
  return 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000'; // Generic nature
};

const processQueue = async () => {
  if (isProcessing || requestQueue.length === 0) return;
  
  isProcessing = true;
  const item = requestQueue.shift();
  
  if (!item) {
    isProcessing = false;
    return;
  }

  const { prompt, aspectRatio, resolve } = item;

  try {
    if (!apiKey) {
      console.warn("No API Key provided. Using fallback.");
      resolve(getFallbackImage(prompt));
    } else {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio
          }
        }
      });

      let found = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          resolve(`data:image/png;base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      if (!found) {
         // Fallback if AI returns no image
         resolve(getFallbackImage(prompt));
      }
    }
  } catch (error: any) {
    // If quota exceeded or any other error, ALWAYS return a fallback image so the UI doesn't break
    console.warn(`[Gemini] Error or Quota exceeded. Using fallback for: "${prompt.slice(0, 20)}..."`);
    resolve(getFallbackImage(prompt));
  } finally {
    setTimeout(() => {
      isProcessing = false;
      processQueue();
    }, REQUEST_DELAY);
  }
};

export const generateImage = (prompt: string, aspectRatio: "1:1" | "3:4" | "4:3" | "16:9" = "1:1"): Promise<string | null> => {
  return new Promise((resolve) => {
    requestQueue.push({ prompt, aspectRatio, resolve });
    processQueue();
  });
};
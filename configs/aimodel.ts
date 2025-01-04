import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey||"");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic Interesting historical story along with AI image prompt in realistic format for each scene and give me result in json format with imagePrompt and contentText as field name\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling marketplace in ancient Alexandria, Egypt, filled with merchants selling spices, textiles, and pottery. The sun is shining brightly, and the scene is rendered in a realistic and vibrant style, capturing the energy of the ancient city. Close-up on a merchant holding up a roll of papyrus with hieroglyphics.\",\n     \"contentText\": \"In the ancient city of Alexandria, a bustling marketplace thrives, its vibrant energy echoing through time. Amidst the clamor of bartering, secrets are whispered on scrolls of papyrus.\"\n  },\n   {\n    \"imagePrompt\": \"Realistic depiction of Hypatia of Alexandria, a female philosopher, astronomer and mathematician, writing on a wax tablet by the light of an oil lamp, surrounded by scrolls and astronomical instruments. She looks thoughtful and intelligent. The scene is set in a dimly lit library with ancient books.\",\n     \"contentText\": \"Here, in the heart of knowledge, lived Hypatia, a brilliant scholar whose intellect defied the boundaries of her time. She spent countless hours unraveling the mysteries of mathematics and the cosmos.\"\n  },\n  {\n     \"imagePrompt\": \"A realistic rendering of a vast library, the Library of Alexandria, filled with countless scrolls and ancient texts, stretching to the high ceiling. Light streaming through the tall windows illuminates the vast collection. The architecture is grand and imposing.\",\n    \"contentText\": \"And within the Great Library, a treasure trove of human thought resided, a testament to the pursuit of knowledge. It was a repository of wisdom and ideas, all carefully preserved and waiting to be discovered.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic depiction of the Library of Alexandria engulfed in flames, scrolls burning, and the walls crumbling. The scene is chaotic and dramatic, showing the destruction and loss of precious knowledge. Smoke and flames billow into the sky.\",\n    \"contentText\": \"But tragedy struck, and the flames devoured the library, consuming centuries of wisdom in a single, devastating moment. A profound loss for the ages.\"\n  },\n  {\n     \"imagePrompt\": \"Realistic depiction of a single charred papyrus scroll, lying amidst the ashes of the library. Light is dimly illuminating the scroll, and the edges are burned and frayed. Focus on the fragility of the scroll, symbolizing lost knowledge.\",\n    \"contentText\":\"Yet, even amidst the ashes, remnants of brilliance remained, a poignant reminder of the fragility of knowledge and the enduring power of human curiosity. The story of Alexandria serves as a lesson, echoing through time about the importance of preserving wisdom for generations to come.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });
  
  
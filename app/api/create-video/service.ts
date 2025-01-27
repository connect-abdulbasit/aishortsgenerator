import { chatSession } from "@/configs/aimodel";
import { NextResponse } from 'next/server';
import googleTTS from 'google-tts-api';
import fs from 'fs';
import path from 'path';

export const createScript = async (prompt: string) => {
    console.log(prompt)
  return await chatSession.sendMessage(prompt);
};

// Function to split long text into smaller chunks
const splitText = (text: string, chunkSize: number = 200) => {
  const result = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    result.push(text.slice(i, i + chunkSize));
  }
  return result;
};

// Function to convert text to speech and save as MP3 file
export const convertToMp3 = async (text: string) => {
  const textChunks = splitText(text); // Split long text into chunks
  const audioFiles = [];

  for (const chunk of textChunks) {
    const url = googleTTS.getAudioUrl(chunk, {
      lang: 'en',
      slow: false,
      host: 'https://translate.google.com',
    });

    const outputFilePath = path.resolve('./output_' + Date.now() + '.mp3');
    audioFiles.push(outputFilePath);

    // Fetch and save each audio chunk
    await new Promise<void>((resolve, reject) => {
      fetch(url)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          fs.writeFileSync(outputFilePath, Buffer.from(buffer));
          resolve();
        })
        .catch(error => {
          reject(`Error generating speech for chunk: ${error.message}`);
        });
    });
  }

  return audioFiles; // Return an array of paths to the saved MP3 files
};
export const createVideo = async (prompt: string) => {
  try {
    const script = await createScript(prompt);
    const text: { contentText: string }[] = JSON.parse(script.response.text()); // Explicitly type `text`
    
    console.log('text', text);

    const audioText = text.map((item) => item.contentText).join(' '); // No `any`, type is inferred
    console.log('audioText', audioText);

    // const image = await generateImage(audioText);
    const mp3Files = await convertToMp3(audioText); // Get the MP3 files
    // console.log('MP3 files saved at:', mp3Files);

    return NextResponse.json({ content: text, mp3Files });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
    return NextResponse.json({ error: 'An unknown error occurred' });
  }
};


// export const generateImage = async (prompt:string) => {
//   try {
//     // Sending request to Craiyon API with the text prompt
//     const response = await axios.post('https://api.craiyon.com/generate', {
//       prompt: prompt
//     });

//     // The response contains an array of image URLs
//     const imageUrls = response.data.images;

//     // Download images (first image in the array)
//     const imageUrl = imageUrls[0]; // Get the first generated image URL

//     const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
    
//     // Save the image as a file (e.g., 'output.jpg')
//     const writer = fs.createWriteStream('output.jpg');
//     imageResponse.data.pipe(writer);

//     writer.on('finish', () => {
//       console.log('Image saved as output.jpg');
//     });
//   } catch (error) {
//     console.error('Error generating image:', error);
//   }
// }

 
import * as PlayHT from 'playht';
import fs from 'fs';
import { chatSession } from "@/configs/aimodel";
import { NextResponse } from 'next/server';

export const createScript=async(prompt:string)=>{
   return await chatSession.sendMessage(prompt);
}
export const convertToMp3=async(prompt:string)=>{
return await streamAudio(prompt)
}

export const createVideo=async(prompt:string)=>{
  const script=await createScript(prompt)
  const text=JSON.parse(script.response.text())
  console.log('text',text)
  const audioText=text.map((item:any)=>item.contentText).join(' ')
  console.log('audioText',audioText)
//   await convertToMp3(audioText)
 return NextResponse.json({content:text})
}


PlayHT.init({
  userId: process.env.NEXT_PUBLIC_PLAYHT_USER_ID!,
  apiKey: process.env.NEXT_PUBLIC_PLAYHT_API_KEY!,
});

async function streamAudio(text:string) {
  const stream = await PlayHT.stream(text, { voiceEngine: 'PlayDialog' });
  stream.on('data', (chunk) => {
    // Do whatever you want with the stream, you could save it to a file, stream it in realtime to the browser or app, or to a telephony system
    fs.appendFileSync('output.mp3', chunk);
  });
  return stream;
}

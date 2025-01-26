import { NextRequest } from "next/server";
import { createVideo } from "./service";

export const POST = async (req: NextRequest) => {
  try {
    const { prompt } = await req.json();
   return await createVideo(prompt)
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};


import { chatSession } from "@/configs/aimodel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { prompt } = await req.json();
    const result = await chatSession.sendMessage(prompt);
    return NextResponse.json({ result: JSON.parse(result.response.text()) });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};


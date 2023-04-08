import { get } from '@vercel/edge-config';
import { NextRequest, NextResponse } from "next/server";

export const runtime: string = "edge";
export const regions: string = "sfo1";

export const GET = async (req: NextRequest) => {
  const greeting = await get('greeting');
  return NextResponse.json(greeting);
};

export const POST = async (req: NextRequest) => {
  const url: string = "https://api.openai.com/v1/chat/completions";
  
  const headers = new Headers();
  headers.set("Authentication", `Bearer `);

  return fetch(url, {
    method: req.method,
    headers,
    body: req.body,
  });
};

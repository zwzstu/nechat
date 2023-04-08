import { get } from '@vercel/edge-config';
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const greeting = await get('greeting');
  return NextResponse.json(greeting);
};

export const POST = async (req: NextRequest) => {
  const url: string = "https://api.openai.com/v1/chat/completions";
  
  const keys = await get("keys") as string[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${randomKey}`);

  const res = await req.json();
  return NextResponse.json(res);
};

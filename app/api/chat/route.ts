import { NextRequest } from "next/server";

export const runtime: string = "experimental-edge";
export const regions: string = "sfo1";

export const GET = async (req: NextRequest) => {
  const url: string = "http://ip.jsontest.com/";

  const headers = new Headers();

  return fetch(url, {
    method: req.method,
    headers,
  });
};

export const POST = async (req: NextRequest) => {
  const url: string = "https://api.openai.com/v1/chat/completions";

  const headers = new Headers();
  headers.set("Authentication", `Bearer `);

  return fetch(url, {
    method: req.method,
    headers,
  });
};

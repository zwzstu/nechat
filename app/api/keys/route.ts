import { get } from "@vercel/edge-config";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    runtime: 'edge',
    regions: 'iad1', // optional
  };

export const GET =async (req: NextRequest) => {
    const keys = await get("keys") as string[];
    return NextResponse.json(keys);
}
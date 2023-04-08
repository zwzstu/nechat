import { get } from "@vercel/edge-config";
import { NextRequest, NextResponse } from "next/server";

export const runtime: string = "edge";
export const regions: string = "sfo1";

export const GET =async (req: NextRequest) => {
    const keys = await get("keys") as string[];
    return NextResponse.json(keys);
}

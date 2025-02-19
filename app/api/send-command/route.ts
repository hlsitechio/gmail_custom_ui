import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const { command } = await request.json()

    // Store the command in Vercel KV
    await kv.set("latest_command", command)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to process command" }, { status: 500 })
  }
}


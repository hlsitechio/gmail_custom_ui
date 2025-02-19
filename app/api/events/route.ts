import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { kv } from "@vercel/kv"

export const runtime = "nodejs"

export async function GET() {
  const headersList = headers()

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue("data: connected\n\n")

      const checkCommands = async () => {
        const latestCommand = await kv.get("latest_command")
        if (latestCommand) {
          controller.enqueue(`data: ${JSON.stringify(latestCommand)}\n\n`)
          await kv.del("latest_command")
        }
      }

      // Check for new commands every 5 seconds
      const interval = setInterval(checkCommands, 5000)

      // Clean up on close
      headersList.get("connection")?.includes("close") && clearInterval(interval)
    },
  })

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}


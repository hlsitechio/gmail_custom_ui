import type { VercelRequest, VercelResponse } from "@vercel/node"
import { KV } from "@vercel/kv"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader("Connection", "keep-alive")

  // Send an initial message
  res.write("data: connected\n\n")

  // Check for new commands every 5 seconds
  const intervalId = setInterval(async () => {
    const latestCommand = await KV.get("latest_command")
    if (latestCommand) {
      res.write(`data: ${latestCommand}\n\n`)
      await KV.del("latest_command")
    }
  }, 5000)

  // Clean up the interval when the client disconnects
  req.on("close", () => {
    clearInterval(intervalId)
  })
}


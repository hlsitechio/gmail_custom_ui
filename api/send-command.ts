import type { VercelRequest, VercelResponse } from "@vercel/node"
import { KV } from "@vercel/kv"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { command } = req.body

    // Store the command in Vercel KV
    await KV.set("latest_command", JSON.stringify(command))

    res.status(200).json({ success: true })
  } else {
    res.status(405).json({ error: "Method not allowed" })
  }
}


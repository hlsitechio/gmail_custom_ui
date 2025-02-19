"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send, Mail, RefreshCcw, Search } from "lucide-react"
import { toast } from "sonner"

export default function Home() {
  const [loading, setLoading] = useState(false)

  const sendCommand = async (type: string, data?: any) => {
    setLoading(true)
    try {
      const response = await fetch("/api/send-command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          command: {
            type,
            data,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send command")
      }

      toast.success(`Command ${type} sent successfully`)
    } catch (error) {
      toast.error("Failed to send command")
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Chrome Extension Control Panel</CardTitle>
          <CardDescription>Send commands to control your Gmail Chrome extension</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Quick Actions</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => sendCommand("OPEN_POPUP")} disabled={loading}>
                  <Mail className="w-4 h-4 mr-2" />
                  Open Popup
                </Button>
                <Button variant="outline" onClick={() => sendCommand("REFRESH")} disabled={loading}>
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Search Emails</h3>
              <div className="flex gap-2">
                <Input
                  id="search"
                  placeholder="Enter search query"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      sendCommand("SEARCH", { query: e.currentTarget.value })
                    }
                  }}
                />
                <Button
                  variant="secondary"
                  onClick={() => {
                    const query = (document.getElementById("search") as HTMLInputElement).value
                    sendCommand("SEARCH", { query })
                  }}
                  disabled={loading}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Compose Email</h3>
              <div className="grid gap-2">
                <div>
                  <Label htmlFor="to">To</Label>
                  <Input id="to" placeholder="recipient@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Email subject" />
                </div>
                <Button
                  onClick={() => {
                    const to = (document.getElementById("to") as HTMLInputElement).value
                    const subject = (document.getElementById("subject") as HTMLInputElement).value
                    sendCommand("COMPOSE", { to, subject })
                  }}
                  disabled={loading}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Compose
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}


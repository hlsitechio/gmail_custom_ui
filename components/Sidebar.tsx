import { Button } from "@nextui-org/react"
import { Inbox, Send, Star, File, Trash } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-content1 border-r border-divider">
      <nav>
        <Button
          startContent={<Inbox className="w-4 h-4" />}
          className="w-full justify-start mb-2"
          color="primary"
          variant="light"
        >
          Inbox
        </Button>
        <Button startContent={<Send className="w-4 h-4" />} className="w-full justify-start mb-2" variant="light">
          Sent
        </Button>
        <Button startContent={<Star className="w-4 h-4" />} className="w-full justify-start mb-2" variant="light">
          Starred
        </Button>
        <Button startContent={<File className="w-4 h-4" />} className="w-full justify-start mb-2" variant="light">
          Drafts
        </Button>
        <Button startContent={<Trash className="w-4 h-4" />} className="w-full justify-start mb-2" variant="light">
          Trash
        </Button>
      </nav>
    </aside>
  )
}


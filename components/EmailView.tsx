import { Avatar, Button, Divider } from "@nextui-org/react"
import { Reply, Forward, MoreHorizontal, Star } from "lucide-react"

export function EmailView() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Meeting tomorrow</h2>
        <div>
          <Button isIconOnly variant="light">
            <Star className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="light">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Avatar src="https://i.pravatar.cc/150?u=1" className="mr-4" />
        <div>
          <div className="font-semibold">John Doe</div>
          <div className="text-sm text-gray-500">john@example.com</div>
        </div>
      </div>
      <Divider className="my-4" />
      <div className="prose dark:prose-invert max-w-none">
        <p>Hi,</p>
        <p>
          I hope this email finds you well. I wanted to touch base about our meeting scheduled for tomorrow at 2 PM.
          I've prepared a brief agenda for our discussion:
        </p>
        <ol>
          <li>Project status update</li>
          <li>Timeline review</li>
          <li>Budget considerations</li>
          <li>Next steps and action items</li>
        </ol>
        <p>
          If you have any additional topics you'd like to cover, please let me know, and I'll add them to the agenda.
        </p>
        <p>Looking forward to our meeting!</p>
        <p>
          Best regards,
          <br />
          John
        </p>
      </div>
      <Divider className="my-4" />
      <div className="flex gap-2">
        <Button color="primary" startContent={<Reply className="w-4 h-4" />}>
          Reply
        </Button>
        <Button variant="bordered" startContent={<Forward className="w-4 h-4" />}>
          Forward
        </Button>
      </div>
    </div>
  )
}


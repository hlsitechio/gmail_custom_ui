"use client"

import { Avatar, Checkbox, Chip } from "@nextui-org/react"
import { motion } from "framer-motion"

const emails = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting tomorrow",
    preview: "Hi, let's discuss the project...",
    time: "10:30 AM",
    unread: true,
  },
  // Add more email objects here
]

export function EmailList() {
  return (
    <div className="w-1/3 border-r border-divider overflow-y-auto">
      {emails.map((email) => (
        <motion.div
          key={email.id}
          className={`flex items-center p-4 border-b border-divider cursor-pointer ${
            email.unread ? "bg-content2" : ""
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Checkbox className="mr-4" />
          <Avatar src={`https://i.pravatar.cc/150?u=${email.id}`} className="mr-4" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">{email.sender}</span>
              <span className="text-sm text-gray-500">{email.time}</span>
            </div>
            <div className="text-sm font-medium">{email.subject}</div>
            <div className="text-sm text-gray-500 truncate">{email.preview}</div>
          </div>
          {email.unread && (
            <Chip color="primary" variant="dot" className="ml-2">
              New
            </Chip>
          )}
        </motion.div>
      ))}
    </div>
  )
}


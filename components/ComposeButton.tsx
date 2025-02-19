import { Button } from "@nextui-org/react"
import { Plus } from "lucide-react"

export function ComposeButton() {
  return (
    <Button
      color="primary"
      startContent={<Plus className="w-4 h-4" />}
      className="fixed bottom-6 right-6 shadow-lg"
      size="lg"
    >
      Compose
    </Button>
  )
}


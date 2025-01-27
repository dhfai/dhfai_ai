"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Paperclip, ArrowUp } from "lucide-react"

interface CustomInputProps {
  onSend: () => void
}

export default function CustomInput({ onSend }: CustomInputProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col space-x-2 border rounded-xl">
          <Input
            type="text"
            placeholder="Ask dhfai.ai a question..."
            style={{
                border: "none",
                outline: "none",
                boxShadow: "none"
            }}
        />
          <div className="flex justify-between items-center p-4">
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onSend}>
                <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onSend}>
                    <ArrowUp className="h-4 w-4" />
                </Button>
            </div>
          </div>
      </div>
    </div>
  )
}


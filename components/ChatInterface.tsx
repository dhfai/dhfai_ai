"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CustomInput from "./CustomeInput"

export default function ChatInterface() {
  const [showResponse, setShowResponse] = useState(false)

  const handleSend = () => {
    setShowResponse(false)
    setTimeout(() => {
      setShowResponse(true)
    }, 1000)
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {showResponse && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="text-sm font-medium">AI Assistant</p>
                <p>
                  Hello! I'm here to help you with any questions you might have about web development, programming, or
                  any other topics. What would you like to know?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    <CustomInput onSend={handleSend} />

    </div>
  )
}

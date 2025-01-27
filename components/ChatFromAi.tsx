"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

export default function FakeChat() {
  const [isLoading, setIsLoading] = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  const handleSendMessage = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowResponse(true)
    }, 2000) // Simulate 2 seconds of "thinking"
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <p className="text-sm font-medium">User</p>
              <p>Can you explain how React's useEffect hook works?</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {showResponse && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-ai.jpg" alt="AI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="text-sm font-medium">AI Assistant</p>
                <p>
                  React's useEffect hook is used for handling side effects in functional components. It runs after every
                  render by default, but you can control when it runs by specifying dependencies. Here's a basic
                  explanation:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>It takes two arguments: a function and an optional dependency array.</li>
                  <li>The function runs after the component renders.</li>
                  <li>If you provide a dependency array, the effect only runs when those dependencies change.</li>
                  <li>You can return a cleanup function from your effect if needed.</li>
                </ol>
                <p>It's commonly used for data fetching, subscriptions, or manually changing the DOM.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button onClick={handleSendMessage} disabled={isLoading || showResponse}>
        {isLoading ? "Thinking..." : "Send Message"}
      </Button>
    </div>
  )
}


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Download, User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { chatResponses } from "@/lib/chat-data"
import { AnimatePresence, motion } from "framer-motion"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage = {
      id: Date.now().toString(),
      content:
        "👋 Hi there! I'm Manikanta's virtual assistant. How can I help you today? You can ask me about:\n\n- My background\n- My education\n- My experience\n- My skills\n- My projects\n- Download my resume",
      sender: "bot" as const,
      timestamp: new Date(),
    }

    setIsTyping(true)
    setTimeout(() => {
      setMessages([welcomeMessage])
      setIsTyping(false)
    }, 1000)
  }, [])

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Process the message and get a response
    setTimeout(
      () => {
        const botResponse = processUserMessage(input.toLowerCase())
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay to simulate thinking
  }

  const processUserMessage = (message: string): string => {
    // Check for keywords in the message
    if (message.includes("resume") || message.includes("cv") || message.includes("download")) {
      return chatResponses.resume
    } else if (
      message.includes("background") ||
      message.includes("about") ||
      message.includes("who are you") ||
      message.includes("tell me about yourself")
    ) {
      return chatResponses.background
    } else if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("college") ||
      message.includes("university")
    ) {
      return chatResponses.education
    } else if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job") ||
      message.includes("intern")
    ) {
      return chatResponses.experience
    } else if (message.includes("skill") || message.includes("technology") || message.includes("tech stack")) {
      return chatResponses.skills
    } else if (message.includes("project") || message.includes("portfolio") || message.includes("work")) {
      return chatResponses.projects
    } else if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("phone") ||
      message.includes("reach")
    ) {
      return chatResponses.contact
    } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return chatResponses.greeting
    } else if (message.includes("thank") || message.includes("thanks")) {
      return chatResponses.thanks
    } else {
      return chatResponses.fallback
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const downloadResume = () => {
    // In a real implementation, this would be a link to the actual resume file
    const link = document.createElement("a")
    link.href = "/Manikanta_Resume.pdf" // This would be the actual path to the resume
    link.download = "Kuncham_Venkata_Satya_Manikanta_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Add a message about the download
    const botMessage: Message = {
      id: Date.now().toString(),
      content:
        "I've started the download of my resume. If it doesn't begin automatically, please check your browser settings.",
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botMessage])
  }

  return (
    <div className="flex flex-col h-full bg-slate-950 rounded-lg shadow-xl overflow-hidden border border-slate-700">
      <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <h2 className="font-medium text-white">Chat with Manikanta's Assistant</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-white border-slate-600 hover:bg-slate-700"
          onClick={downloadResume}
        >
          <Download className="h-4 w-4 mr-2" /> Resume
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex items-start space-x-2 mb-4",
                message.sender === "user" ? "justify-end" : "justify-start",
              )}
            >
              {message.sender === "bot" && (
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
              )}

              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-slate-800 text-slate-100 rounded-tl-none",
                )}
              >
                <div className="whitespace-pre-line">{message.content}</div>
                <div className={cn("text-xs mt-1", message.sender === "user" ? "text-blue-200" : "text-slate-400")}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>

              {message.sender === "user" && (
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <div className="flex items-start space-x-2">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="bg-slate-800 text-white rounded-lg rounded-tl-none p-3">
              <div className="flex space-x-1">
                <div
                  className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-blue-500"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-2 text-xs text-slate-400 text-center">
          Try asking about my background, skills, or projects
        </div>
      </div>
    </div>
  )
}


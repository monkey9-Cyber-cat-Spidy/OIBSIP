import ChatInterface from "@/components/chat-interface"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kuncham Venkata Satya Manikanta | Portfolio",
  description:
    "Interactive portfolio of Kuncham Venkata Satya Manikanta, Computer Science Engineer specializing in web development and design.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-4xl mx-auto h-[90vh] flex flex-col">
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Kuncham Venkata Satya Manikanta</h1>
          <p className="text-slate-300">Computer Science Engineer | Web Developer | Data Analyst</p>
        </header>

        <ChatInterface />
      </div>
    </main>
  )
}


import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { FileText, Brain, Lightbulb, Target, Timer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <Hero />

      {/* How it Works Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed">Three simple steps to create your personalized quiz</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Input Your Content</h3>
            <p className="text-gray-500">
              Paste your text or upload a document containing the material you want to learn
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">2. AI Generation</h3>
            <p className="text-gray-500">Our AI analyzes the content and creates relevant multiple-choice questions</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Take the Quiz</h3>
            <p className="text-gray-500">Test your knowledge with the generated questions and track your progress</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">QuizGenius</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 QuizGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


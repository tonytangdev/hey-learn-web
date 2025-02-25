import { NavBar } from "@/components/nav-bar"
import { Brain } from "lucide-react"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <HowItWorks />

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


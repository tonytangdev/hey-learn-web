import Link from "next/link"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">QuizGenius</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/quiz" className="text-sm font-medium hover:text-primary transition-colors">
            My Quizzes
          </Link>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}


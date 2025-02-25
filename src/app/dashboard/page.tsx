import { NavBar } from "@/app/_components/nav-bar"

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Quiz Page</h1>
        <p className="mt-4">Quiz content will go here...</p>
      </main>
    </div>
  )
}


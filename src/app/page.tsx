import { Hero } from "@/app/_components/hero"
import { HowItWorks } from "@/app/_components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
    </div>
  )
}


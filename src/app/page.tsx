import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
    </div>
  )
}


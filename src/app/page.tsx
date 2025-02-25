import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <HowItWorks />
    </div>
  )
}


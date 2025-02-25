"use client"

import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, FileText, Type, Brain, Lightbulb, Target, Timer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function Home() {
  const [text, setText] = useState("")

  const onGenerateQuiz = () => {
    console.log({ api: process.env.NEXT_PUBLIC_API_URL })
    console.log({ text })

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/quiz/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ textInput: text, userId: "user_28785fc7-d81d-4775-82ae-440e8434b59e", organizationId: 'org_8b6e8779-adde-4ee0-81c9-4d6d0deb23f2' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Turn Any Text into an
                <span className="text-primary"> Interactive Quiz</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Upload your study material or paste any text, and our AI will instantly generate engaging
                multiple-choice questions. Perfect for students, teachers, and self-learners.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Tabs defaultValue="text" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
                  <TabsTrigger value="text" className="flex items-center gap-2">
                    <Type className="h-4 w-4" />
                    Paste Text
                  </TabsTrigger>
                  <TabsTrigger value="file" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Upload File
                  </TabsTrigger>
                </TabsList>

                <div className="rounded-xl border bg-background/60 p-4 backdrop-blur-sm">
                  <TabsContent value="text" className="space-y-4 mt-0">
                    <Textarea
                      placeholder="Paste your study material, article, or any text you want to learn from..."
                      className="min-h-[200px] text-lg"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button onClick={onGenerateQuiz} size="lg" className="group">
                        Generate Quiz
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="file" className="space-y-4 mt-0">
                    <div className="flex flex-col items-center justify-center min-h-[200px] rounded-lg border-2 border-dashed border-muted-foreground/20 p-8">
                      <BookOpen className="h-8 w-8 mb-4 text-muted-foreground" />
                      <div className="space-y-2 text-center">
                        <p className="text-sm text-muted-foreground">Upload your study material</p>
                        <p className="text-xs text-muted-foreground">Support for PDF, DOC, DOCX, and TXT files</p>
                      </div>
                      <Input type="file" accept=".txt,.doc,.docx,.pdf" className="cursor-pointer mt-4" />
                    </div>
                    <div className="flex justify-end">
                      <Button size="lg" className="group">
                        Generate Quiz
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

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

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Smart Features</h2>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed">Everything you need for effective learning</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 space-y-2">
              <Brain className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-xl font-bold">AI-Powered Questions</h3>
              <p className="text-gray-500">Intelligent generation of relevant and challenging questions</p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 space-y-2">
              <Lightbulb className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-xl font-bold">Smart Explanations</h3>
              <p className="text-gray-500">Detailed explanations for each answer to enhance understanding</p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 space-y-2">
              <Timer className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-xl font-bold">Practice Mode</h3>
              <p className="text-gray-500">Time yourself and track your improvement over multiple attempts</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/5 px-8 py-16 backdrop-blur-sm">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Learning Smarter</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transform any text into an interactive learning experience. Perfect for students, teachers, and lifelong
                learners.
              </p>
              <Button size="lg" className="mt-8">
                Create Your First Quiz
              </Button>
            </div>
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


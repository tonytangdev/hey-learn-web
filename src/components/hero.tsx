"use client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, FileText, Type } from "lucide-react"
import { useState } from "react"

export const Hero = () => {

  const [text, setText] = useState("")

  const onGenerateQuiz = () => {
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
  )
}